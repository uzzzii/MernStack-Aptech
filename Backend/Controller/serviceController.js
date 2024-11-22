const Service = require("../Model/serviceSchema")

const GetServices = async (req,res) =>{
      try {
            const response = await Service.find();
            if(!response)
            {
                  res.status(400).json({msg:"No Data Found"})
                  return
            }
            res.status(200).json({msg:response})
      } catch (error) {
            console.log(error)  
      }
};


const AddServices = async (req, res) => {
      try {
        const { name, description, price } = req.body;
        const service = await Service.create({
            name, description, price
        });
  
       return res.status(201).json({Servicedetails:service  , msg: "Message send" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
      }
    };
    
module.exports = {GetServices, AddServices}