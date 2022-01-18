class CreateDmThreads < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_threads do |t|
      t.integer :server_id, null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end

    add_index :dm_threads, [:server_id, :receiver_id], unique: true 
  end
end
