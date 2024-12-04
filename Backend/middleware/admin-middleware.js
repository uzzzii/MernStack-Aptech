const adminMiddleware = async (req, res, next) => {
  try {
    const role = req.user.isAdmin
    console.log(isAdmin)
    if (!role) {
      res.status(400).json({ msg: "Access Denied , User Admin nhi ha" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = adminMiddleware;
