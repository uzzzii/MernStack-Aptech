const adminMiddleware = async (req, res, next) => {
  try {
    const role = req.user.isAdmin; // Get the 'isAdmin' value from the user object
    console.log(role); // Log the 'role', not 'isAdmin'
    
    if (!role) {
      return res.status(400).json({ msg: "Access Denied, User is not an Admin" });
    }
    
    next(); // Call next() to proceed with the next middleware/route handler
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" }); // Return an error if something goes wrong
  }
};

module.exports = adminMiddleware;
