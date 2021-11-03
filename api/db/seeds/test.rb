subjects_names = ['国語', '社会', '数学', '理科', '英語']

subjects_names.each do |subject|
  Subject.create!(
    title: subject
  )
end