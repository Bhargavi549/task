const userModel = require("../models/usermodel");

const userController = {
    register: async (req,res) =>{
        try {
            const {username, password, email} = req.body
            const newUser = {
                username,
                password,
                email
            }
            await userModel.createUser(newUser)
            res.status(201).json({message : "user registration successfull"})   
        } catch (error) {
          console.log("Error during registration", err);
          res.status(500).json("Internal server error")  
        }
    }
}
module.exports = userController;