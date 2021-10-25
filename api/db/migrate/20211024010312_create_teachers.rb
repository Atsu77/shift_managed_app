class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :del_flag
      t.string :gender
      t.string :image
      t.text :comment

      t.timestamps
    end
  end
end
