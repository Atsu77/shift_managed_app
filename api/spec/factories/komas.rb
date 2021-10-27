FactoryBot.define do
  factory :koma do
    date { Date.tomorrow }
    koma { 'A' }
    association :student
    association :teacher
    association :subject
  end
end
