require("dotenv").config();
const express = require('express');
const mongoose=require('mongoose');

// Initialize App
const app = express();

//port
const port=process.env.PORT || 9000;

//mongo connection 
mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
})
mongoose.connection.on('connected',()=>{
    console.log("mongodb connected")
})
mongoose.connection.on('error',(err)=>{
    console.log("mongodb error",err)
})


//middleware
app.use(express.json({extented:false}))

//routes
app.use('/auth',require('./routes/auth'));
app.use('/user',require('./routes/users'))

// SERVER LISTEN/START
app.listen(port, () => {
    console.log(`Server has started on :${port}`);
});