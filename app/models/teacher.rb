class Teacher < ApplicationRecord
  include CommonModule

  has_secure_password
  has_many :subject_teachers
  has_many :subjects, through: :subject_teachers
  has_many :komas

  before_save do
    email.downcase!
  end
  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :comment, length: { maximum: 100 }

  has_one_attached :image
  mount_uploader :image, ImageUploader
end
