class User < ApplicationRecord
	validates_uniqueness_of :username
	has_secure_password
	has_secure_token :auth_token
	has_many :monsters
	
	def invalidate_token
		self.update_columns(auth_token: nill)
	end
	def self.validate_login(username,password)
		user=find_by(username: username)
		if user&&user.authenticate(password)
			user
		end
	end	


end
