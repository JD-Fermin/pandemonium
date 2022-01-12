class AddAuthorToThread < ActiveRecord::Migration[5.2]
  def change
    remove_index :dm_threads, name: "index_dm_threads_on_server_id_and_receiver_id"
    rename_column :dm_threads, :server_id, :author_id
    add_index :dm_threads, [:author_id, :receiver_id], unique: true 
  end
end
