const express = require("express");
const mongoose = require('mongoose');
const Student = require("./models/Student.model")
const cors = require("cors")
const app = express();


app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('Hello Welcome to Node API')
})
app.post('/', (req, res)=>{
    res.send('welcome to post method')
})

app.post('/api/students', async (req, res)=>{
    try{
        const student = await Student.create(req. body);
        res.status(200).json(student);
    } catch(error){
        res.status(500).json({message:error.message})
    }
})



mongoose.connect("mongodb+srv://aeleshwarammounika:MeraVidya12@education.b5lsoox.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Education")

.then(()=>{
    console.log("connected to data base");
    app.listen(5000,()=>{
        console.log('server is running on port 5000')
 });
})
.catch(()=>{
    console.log("connection failed");
})