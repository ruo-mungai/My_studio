class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :name
      t.string :url
      t.string :category
      t.integer :like , null: false, default: 0

      t.timestamps
    end
  end
end
