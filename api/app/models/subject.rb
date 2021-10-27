class Subject < ApplicationRecord
  has_many :subject_teachers, through: :teachers
  has_many :komas

  validates :title, presence: true, uniqueness: true, length: {maximum: 50}
end
