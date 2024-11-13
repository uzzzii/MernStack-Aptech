const jwt = require("jsonwebtoken");
const User = require ("../Model/userSchema");

    const token = req.header("Authorization");
    if (!token)
    {
        return res.status(400).json({ msg: "Access denied. No token provided." });
    }
    const jwtToken = token.replace("Bearer","").trim();
    console.log ("Token from auth middleware",jwtToken);

    try {
        
    } catch (error) {
        
    }
}
