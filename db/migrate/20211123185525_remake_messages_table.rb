class RemakeMessagesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :content, null: false
      t.integer :author_id, null: false
      t.references :messageable, polymorphic: true, null: false
      t.timestamps
    end

    add_index :messages, :author_id
    # add_index :messages, [:messageable_type, :messageable_id]
    #Ex:- add_index("admin_users", "username")

  end
end
