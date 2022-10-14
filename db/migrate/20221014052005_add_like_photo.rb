class AddLikePhoto < ActiveRecord::Migration[7.0]
  def change
    add_column :photos, :likes, :integer
  end
end
