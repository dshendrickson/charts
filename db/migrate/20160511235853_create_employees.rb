class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :firstname
      t.string :lastname
      t.integer :manager_id

      t.timestamps null: false
    end
  end
end
