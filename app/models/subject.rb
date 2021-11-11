class Subject < ApplicationRecord
  has_many :subject_teachers
  has_many :teachers, through: :subject_teachers
  has_many :komas

  validates :title, presence: true, uniqueness: true, length: {maximum: 50}

end
