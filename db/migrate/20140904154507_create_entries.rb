class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :name
      t.string :body
      t.integer :user_id

      t.timestamps
    end
  end
end
