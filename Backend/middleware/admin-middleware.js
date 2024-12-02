const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.user)
        const role = req.user.isadmin
        if(!role){
            res.status(400).json({msg:"Access Denied , User Admin nhi ha"})
        }
        next()
    } catch (error) {
        console.log(error)
    }
}
module.exports = adminMiddleware