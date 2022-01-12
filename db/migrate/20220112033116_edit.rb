class Edit < ActiveRecord::Migration[5.2]
  def change
    add_index :direct_messages, :author_id
    rename_column :direct_messages, :recipient_id, :receiver_id
    add_index :direct_messages, :receiver_id
  end
end
