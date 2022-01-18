class DropConvos < ActiveRecord::Migration[5.2]
  def change
    remove_index :conversations, name: "index_conversations_on_author_id_and_receiver_id"
    remove_index :conversations, name: "index_conversations_on_author_id"
    remove_index :conversations, name: "index_conversations_on_receiver_id"
    rename_column :conversations, :author_id, :user_id
    rename_column :conversations, :receiver_id, :conversation_id
    rename_table :conversations, :user_conversations

  end
end
