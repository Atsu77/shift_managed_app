class CreateKomas < ActiveRecord::Migration[5.2]
  def change
    create_table :komas do |t|
      t.references :teacher, foreign_key: true
      t.references :student, foreign_key: true
      t.references :subject, foreign_key: true
      t.datetime :date
      t.string :koma

      t.timestamps
    end
  end
end
