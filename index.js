const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const path = require ("path")
const chat = require("./models/chat.js");


app.set("views" , path.join(__dirname,"views"));
app.set("view engine" ,"ejs");
app.use(express.static(path.join(__dirname,"public")))
main().then(res => console.log("connection success"))
.catch(err=> console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

app.get("/chat", async (req,res)=>{
    let chats = await chat.find();
    res.render("chats", { chats });   // ✅ no .ejs extension
});

let chat1 = new chat({
    from :"Ramu",
    to : "Arun",
    msg :"Send me your address",
    created_at : Date(),
})


chat1.save();
app.get('/', (req, res) => res.send('root is workin!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))