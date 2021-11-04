# 教師ユーザー登録
Teacher.create!(
  name: 'Test account',
  email: 'tester@example.com',
  password: 'password',
  password_confirmation: 'password',
  gender: 'male',
  comment: 'テストコメント'
)

29.times do
  name = Faker::Name.name
  email = Faker::Internet.email
  password = 'password'
  gender = rand(2) % 2 == 0 ? 'male' : 'female' 
  Teacher.create!(
    name: name,
    email: email,
    password: password,
    password_confirmation: password,
    gender: gender,
    comment: 'テストコメント'
  )
end

#生徒ユーザー登録
Student.create!(
  name: 'Test account',
  email: 'tester@example.com',
  password: 'password',
  password_confirmation: 'password',
  gender: 'male',
)

29.times do
  name = Faker::Name.name
  email = Faker::Internet.email
  password = 'password'
  gender = rand(2) % 2 == 0 ? 'male' : 'female' 
  Student.create!(
    name: name,
    email: email,
    password: password,
    password_confirmation: password,
    gender: gender,
  )
end

subjects_names = ['国語', '社会', '数学', '理科', '英語']

subjects_names.each do |subject|
  Subject.create!(
    title: subject
  )
end

komas = ['S', 'A', 'B', 'C', 'D']

# 各教師のシフトを登録する
teachers = Teacher.order(:created_at).take(10)
teachers.each do |teacher|
  teacher.komas.create!(
    date: Date.today + Random.rand(6) + 1,
    koma: komas[Random.rand(5)],
    subject_id: Random.rand(5) + 1
  )
end