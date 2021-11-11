class SubjectTeacher < ApplicationRecord
  belongs_to :teacher
  belongs_to :subject

  validates :subject_id, numericality: { less_than_or_equal_to: Subject.last.id }
end