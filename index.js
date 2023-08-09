const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.post("/", (req, res)=>{

    console.log(req.query.ip, req.query.timezone)
    res.end()

})
app.listen(8080)