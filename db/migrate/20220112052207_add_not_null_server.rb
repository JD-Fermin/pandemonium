class AddNotNullServer < ActiveRecord::Migration[5.2]
  def change
    change_column_null :servers, :isPrivate, false
  end
end
