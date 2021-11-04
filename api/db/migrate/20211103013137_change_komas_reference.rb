class ChangeKomasReference < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :komas, :teachers
    remove_foreign_key :komas, :students
    remove_foreign_key :komas, :subjects
  end
end
