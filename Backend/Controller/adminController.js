const User = require("../Model/userSchema");

const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({},{password:0})
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllUsers;