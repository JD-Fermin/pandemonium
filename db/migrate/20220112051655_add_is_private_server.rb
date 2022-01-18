class AddIsPrivateServer < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :isPrivate, :boolean
  end
end
