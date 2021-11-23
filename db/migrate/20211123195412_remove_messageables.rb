class RemoveMessageables < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :messageable_type
    remove_column :messages, :messageable_id
  end
end
