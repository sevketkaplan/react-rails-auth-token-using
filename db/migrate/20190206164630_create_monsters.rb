class CreateMonsters < ActiveRecord::Migration[5.2]
	def change
		create_table :monsters do |t|
			t.string :name
			t.string :description
			t.belongs_to :user
			t.timestamps
		end
	end
end
