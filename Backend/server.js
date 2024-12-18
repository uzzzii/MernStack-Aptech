const express = require('express');
const authRoutes = require('./Routes/authRoutes');
const homeRoutes = require('./Routes/homeRoutes');
const connectDb = require('./DB/db');
const cors = require("cors");
const ServicesRouter = require('./Routes/serviceRoutes');
const adminRoute = require('./Routes/adminRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/auth',authRoutes)
app.use('/',homeRoutes)
app.use('/serives',ServicesRouter)
app.use('/admin',adminRoute)

connectDb().then(()=>{
    app.listen(8000,()=>{console.log('server started')});
})