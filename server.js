require("dotenv").config();
const express = require('express');
const mongoose=require('mongoose');
const cors = require ('cors');

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
app.use(cors())

//routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/users',require('./routes/users'));
app.use('/api/boards',require('./routes/boards'));
app.use('/api/cards',require('./routes/cards'));
app.use('/api/checklist',require('./routes/checklists'));
app.use('/api/lists',require('./routes/lists'))

// SERVER LISTEN/START
app.listen(port, () => {
    console.log(`Server has started on :${port}`);
});