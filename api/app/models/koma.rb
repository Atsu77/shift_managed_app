class Koma < ApplicationRecord
  belongs_to :teacher, optional: true
  belongs_to :subject, optional: true
  belongs_to :student, optional: true

  validate :day_after_today
  validates :date, presence: true
  validates :koma, inclusion: %w(S A B C D), presence: true

  def day_after_today
    if date == nil || date <= Date.today
      errors.add(:date, '日付が入力されてないか、今日より後の日付を入力してください') 
    end
  end
end
