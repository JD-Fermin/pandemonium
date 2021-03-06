class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :author_id, null: false
      t.integer :receiver_id, null: false

      t.timestamps
    end
    add_index :conversations, :author_id
    add_index :conversations, :receiver_id
    add_index :conversations, [:author_id, :receiver_id], unique: true
  end
end
