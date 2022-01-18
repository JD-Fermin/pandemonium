class ChangeDm < ActiveRecord::Migration[5.2]
  def change
    remove_index :direct_messages, name: "index_direct_messages_on_author_id"
    remove_index :direct_messages, name: "index_direct_messages_on_receiver_id"
    rename_column :direct_messages, :receiver_id, :conversation_id
    rename_column :direct_messages, :author_id, :user_id

    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
