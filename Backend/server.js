const express = require('express');
const authRoutes = require('./Routes/authRoutes');
const homeRoutes = require('./Routes/homeRoutes');
const connectDb = require('./DB/db');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/auth',authRoutes)
app.use('/',homeRoutes)

connectDb().then(()=>{
    app.listen(8000,()=>{console.log('server started')});
})