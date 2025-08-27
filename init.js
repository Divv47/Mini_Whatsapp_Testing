const mongoose = require('mongoose');
const chat = require("./models/chat.js");

main().then(res => console.log("connection success"))
.catch(err=> console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let chats = [
    {
        from: "Ramu",
        to: "Arun",
        msg: "Send me your address",
        created_at: Date(),
    },
    {
        from: "Arun",
        to: "Ramu",
        msg: "I will send it shortly",
        created_at: Date(),
    },
    {
        from: "Sita",
        to: "Geeta",
        msg: "Are you free this weekend?",
        created_at: Date(),
    },
    {
        from: "Geeta",
        to: "Sita",
        msg: "Yes! Let’s plan a meetup",
        created_at: Date(),
    },
    {
        from: "Vikas",
        to: "Ravi",
        msg: "Did you complete the project?",
        created_at: Date(),
    },
    {
        from: "Ravi",
        to: "Vikas",
        msg: "Almost done, will share tonight",
        created_at: Date(),
    },
    {
        from: "Aman",
        to: "Kiran",
        msg: "Happy Birthday 🎉",
        created_at: Date(),
    },
    {
        from: "Kiran",
        to: "Aman",
        msg: "Thank you so much 🙏",
        created_at: Date(),
    },
    {
        from: "Meera",
        to: "Anil",
        msg: "Can you help me with my homework?",
        created_at: Date(),
    },
    {
        from: "Anil",
        to: "Meera",
        msg: "Sure, let’s do it together",
        created_at: Date(),
    },
];

chat.insertMany(chats)