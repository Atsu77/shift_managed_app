FactoryBot.define do
  factory :student do
    sequence(:name) { |n| "TestStudent#{n}" }
    sequence(:email) { |n| "teststudent#{n}@example.com" }
    password { 'password' }
  end
end
