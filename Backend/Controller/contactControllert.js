import Info = require("../Model/contactSchema");

const contact = async (req, res) => {
    try {
      const { username, phone, messages } = req.body;
      const userfeed = await Info.create({
        username,
        phone,
        messages,
      });

     return res.status(201).json({contactdetails:userfeed  , msg: "Message send" });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: error });
    }
  };
  
  module.exports = {contact};