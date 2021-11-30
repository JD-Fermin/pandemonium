class RemoveUniqueFromServerName < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, :name
  end
end
