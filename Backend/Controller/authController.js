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

module.exports = { Login, Registration, getUsers };
