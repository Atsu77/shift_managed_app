FactoryBot.define do
  factory :koma do
    date { Date.today + 1 }
    koma { 'A' }
    association :student
    association :teacher
    association :subject
  end
end
