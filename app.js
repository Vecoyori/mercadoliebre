const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("SERVER FUNCIONANDO")
})
app.get("/", (req,res) =>{
    res.sendFile(__dirname +("/views/index.html"))
})