require 'rails_helper'

RSpec.describe Teacher, type: :model do
  let(:user) { FactoryBot.create(:user) }
  let(:other_user) { FactoryBot.create(:user) }
end
