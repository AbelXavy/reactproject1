//installed mongoose using *npm i mongoose
//import mongoose
var mongoose =require("mongoose");
//now connect
//mongoose.connect("url").then(()=>{}).catch(()=>{})
    mongoose.connect(
        "mongodb+srv://abelxavy2006:user@cluster0.uszia8l.mongodb.net/studentapp1?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log(err);
    });