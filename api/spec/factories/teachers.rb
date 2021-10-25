FactoryBot.define do
  factory :teacher do
    sequence(:name) { |n| "TestUser#{n}" }
    sequence(:email) { |n| "tester#{n}@example.com" }
    password { 'password' }
  end
end
