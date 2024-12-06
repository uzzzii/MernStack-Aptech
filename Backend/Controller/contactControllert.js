const Info = require("../Model/contactSchema");

const Contact = async (req, res) => {
    try {
      const { username, phone, messages } = req.body;
      const userfeed = await Info.create({
        username,
        phone,
        messages
      });

     return res.status(201).json({contactdetails:userfeed  , msg: "Message send" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error });
    }
  };


  const getAllContacts = async(req,res)=>{
    try {
        const contact = await Info.find()
        console.log(contact);
        return res.status(200).json(contact);
    } catch (error) {
        console.log(error);
    }
}
  
  module.exports = {Contact, getAllContacts};