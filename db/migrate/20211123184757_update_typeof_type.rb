class UpdateTypeofType < ActiveRecord::Migration[5.2]
  def change
    drop_table :messages
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
