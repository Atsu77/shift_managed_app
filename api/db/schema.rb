ActiveRecord::Schema.define(version: 2021_10_24_010312) do

  enable_extension "plpgsql"

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "del_flag"
    t.string "gender"
    t.string "image"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
