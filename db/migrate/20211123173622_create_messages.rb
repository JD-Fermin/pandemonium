class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :content, null: false
      t.integer :author_id, null: false
      t.string :type, null: false
      t.integer :type_id, null: false
      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :type_id
    # add_index :messages, :type
    
  end
end
