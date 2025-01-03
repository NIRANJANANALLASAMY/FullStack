var express=require('express')
var app=express()
const PORT=3001
app.listen(PORT,()=>{
    console.log(`Server backend started\nUrl:http://localhost:${PORT}`)
})