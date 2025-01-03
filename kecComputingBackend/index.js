var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User=require('./models/users')
var app = express()
const PORT = 3004
app.use(express.json())

mdb.connect("mongodb://localhost:27017/").then(() => {
    console.log('MoNGODB CONNECTIION SUCCESSFULL')
}).catch(() => {
    console.log('Check your connection string') //connection string-api or url
})
//connect is an indirect way of promise 
app.get('/', (req, res) => {
    res.send('This is website')
})
app.get('/json', (req, res) => {
    res.send({ server: "Welcome", url: "localhost", port: PORT })
})
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.post('/signup',(req,res)=>{
        var {firstName,lastName,email} = req.body
        console.log(firstName,lastName,email)
        try{
            var newUser=new User({
                firstName:firstName,
                lastName:lastName,
                email:email})
                newUser.save()
            console.log("User added successfully")
            res.status(200).send("User added succcessfully")
        }
        catch(err){
            console.log(err)
        }
       
})
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords= await User.find()
        res.json(allSignUpRecords)
        console.log("All data fetched")
    }
    catch(err){
        console.log("Cannot able to read the record");
        res.send(err)
    }
})
app.listen(PORT, () => {
    console.log(`Backend server connected\nUrl:http://localhost:${PORT}`);
})