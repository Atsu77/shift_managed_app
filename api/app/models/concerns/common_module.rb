module CommonModule
  extend ActiveSupport::Concern

  module ClassMethods
    def guest
      find_or_create_by!(email: 'guest@example.com') do |user|
        user.name = 'ゲスト'
        user.password = SecureRandom.urlsafe_base64
      end
    end
  end
end
