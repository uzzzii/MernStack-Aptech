const jwt = require("jsonwebtoken");
const User = require ("../Model/userSchema");

const authMiddleware = async (req,res,next)=>
{
    const token = req.header("Authorization");
    if (!token)
    {
        return res.status(400).json({ msg: "Access denied. No token provided." });
    }
    const jwtToken = token.replace("Bearer","").trim();
    console.log ("Token from auth middleware",jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken,"uzairkhan");
        const userData = await User.findOne({email:isVerified.email});
        console.log(userData);
        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        return res.status(400).json({msg:error})   
    }
}
module.exports = authMiddleware;

