class Koma < ApplicationRecord
  belongs_to :teacher
  belongs_to :subject
  belongs_to :student

  validate :day_after_today
  validates :koma, inclusion: %w(S A B C D)

  def day_after_today
    if date < Date.today
      errors.add(:date, '今日より前の日付を入力してください') 
    end
  end
end
