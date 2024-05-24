const knex = require('knex');
const config = require("../../config/config");

const db = knex(config.db)


const userModel = {
    createUser: async (user)=>{
        try {
            const [userId] = await db("user").insert({
                username: user.username,
                email: user.email,
                password: user.password
            })
            return userId
        } catch (error) {
           throw error 
        } 
    },
    findByName: async (username)=>{
      try {
        const user = await db("user").where({username}).first();
        return user        
      } catch (error) {
        throw error
      }
    },
    findById: async (id)=>{
        try {
          const userDetails = await db("user").where("id",id).first();
          return userDetails  
        } catch (error) {
           throw error 
        }
    },
    getAllUsers: async ()=>{
        try {
           const user = await db("user").select('*') 
           return user
        } catch (error) {
          throw error  
        }
    }

}
module.exports = userModel;