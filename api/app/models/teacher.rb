class Teacher < ApplicationRecord
  has_secure_password
  has_many :subject_teachers
  has_many :subjects, through: :subject_teachers
  has_many :komas

  before_save { email.downcase! }
  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :comment, length: { maximum: 100 }

  has_one_attached :image
  mount_uploader :image, ImageUploader

  def subject_save(subject_ids)
    subjects = []
    Teacher.transaction do
      subject_ids.each do |subject_id|
        subjects << subject_teachers.build(subject_id: subject_id)
      end
      SubjectTeacher.import subjects, validate: true
    end
      true
    rescue StandardError => e
      false
  end

  def self.guest
    find_or_create_by!(email: 'guest@example.com') do |teacher|
      teacher.name = "ゲスト"
      teacher.password = SecureRandom.urlsafe_base64
    end
  end
end
