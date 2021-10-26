class Subject < ApplicationRecord
  has_many :subject_teachers, through: :teachers

  validates :title, presence: true, uniqueness: true, length: {maximum: 50}
end
