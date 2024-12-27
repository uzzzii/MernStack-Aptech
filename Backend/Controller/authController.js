const User = require("../Model/userSchema");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (isPasswordValid) {
     return res.status(200).json({ msg: "Login Successfully",
      token:await userExist.generateToken()
      });
      
    } else {
      res.status(400).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error);
  }
};

const Registration = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send("User Already Exist");
    }
    const hash_password = await bcrypt.hash(password, 10);
    
    const userCreated =await User.create({
      username,
      email,
      password: hash_password,
      phone,
    });
   return res.status(201).json({ msg: userCreated,
      success: "User Created Successfully",
      token:await userCreated.generateToken()
    });
    
  } catch (error) {
    console.log(error);
    res.status(200).json({ msg: error });
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
} catch (err) {
    console.error('Error fetching users:', err);
    throw err;
}
};

const user = async(req,res)=>
{
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
  } catch (error) {
    
  }
}
const UpdateUser = async (req, res) => {

    try {
      const {id} = req.params;
      const Updatedata = req.body;
  
      const user = await User.findByIdAndUpdate(id, Updatedata, { 
        new: true,
        runValidators: true,
      });
 
    if (!user) {
      return res.status(404).json({message : "User Not Found"});
    }
    return res.status(200).json({ message: "User Updated Successfully", UpdateUser: user });   
  } 
  catch (error) {
    console.log ('Error updating user:', error);
    res.status(500).json({message: 'Error updating user', error: error.message });
  }
};

module.exports = { Login, Registration, getUsers,user , UpdateUser };
