
const express = require('express')
const app=express()

app.use(workTime=(req,res,next)=>{
    var now = new Date()
    let heure = now.getHours()
   
    // console.log(heure);

if(heure>=8 && heure<=17){
    next()
    }
else 
res.send("<h1>Sorry Our office is not open now</h1>");
})


app.use(express.static(__dirname +'/public'))



app.listen(5000,(err)=>{

    if(err)console.log("server is not running");
    else console.log("server is running on port 5000");
 
})