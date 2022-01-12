class AddDefaultServerVal < ActiveRecord::Migration[5.2]
  def change
    change_column_default :servers, :isPrivate, false
  end
end
