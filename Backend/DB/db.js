const mongoose = require("mongoose");

const connectDb = async () =>{
    try {
        // await mongoose.connect("mongodb://localhost:27017/mern");
        await mongoose.connect("mongodb+srv://uzairkhan0213:DAWE7tZU7sBYISVW@userlist.s02yf.mongodb.net/?retryWrites=true&w=majority&appName=UserList");
    } catch (error) {
        console.error("connection Falied");
        process.exit(1);
    }
}
module.exports = connectDb;