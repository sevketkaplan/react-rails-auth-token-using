User.destroy_all
Monster.destroy_all

sevket=User.create!(username:'sevketkaplan' ,email:'sevket@example.com' , password:'123123')
aliari=User.create!(username:'aliari' ,email:'ali@example.com' , password:'123123')
gokce=User.create!(username:'gokce' ,email:'gokce@example.com' , password:'123123')
ari=User.create!(username:'ari' ,email:'ari@example.com' , password:'123123')
qwe=User.create!(username:'qwe' ,email:'qwe@example.com' , password:'123123')
asd=User.create!(username:'asd' ,email:'asd@example.com' , password:'123123')
zxc=User.create!(username:'zxc' ,email:'zxc@example.com' , password:'123123')


Monster.create!(user_id: 51, name:'asdfasdfa', description: 'ashadofhmasmdgmasşdmaş')
Monster.create!(user_id: 52, name: 'stacey', description: 'ashadofhmasmdgmasşdmaş')
Monster.create!(user_id: 53, name:'tracey', description: 'ashadofhmasmdgmasşdmaş')
Monster.create!(user_id: 54, name:'mike', description: 'ashadofhmasmdgmasşdmaş')
Monster.create!(user_id: 55, name:'olga', description: 'ashadofhmasmdgmasşdmaş')
Monster.create!(user_id: 56, name:'taison', description: 'ashadofhmasmdgmasşdmaş')