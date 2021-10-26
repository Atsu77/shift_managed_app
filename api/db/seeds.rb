# 教師登録
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
    comment: 'testcomment'
  )
end

Stud.create!(
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
    comment: 'testcomment'
  )
end