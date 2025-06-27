var express=require("express");
var port=3007;
require("./db");
var student=require("./model");
var cores=require("cors");


var app=express();
app.use(express.json());
app.use(cores());
app.post('/',(req,res)=>{
 try {
    student(req.body).save();
    res.send("data saved successfully");
 } catch (error) {
     res.send("data saved error",error);
 }
})
//api to get data from query
//async ,await pair is used to loop data
app.get('/',async(req,res)=>{
    try {
       var data= await student.find()
       res.send(data)
    } catch (error) {
        res.send(error)
    }
})
app.delete('/:id',async(req,res)=>{
    try {
       var data= await student.findByIdAndDelete(req.params.id);
       res.send("data deleteed")
    } catch (error) {
        res.send(error)
    }
})
app.put('/:id',async(req,res)=>{
    try {
       var data= await student.findByIdAndUpdate(req.params.id,req.body);
       res.send("data updated")
       
    } catch (error) {
        res.send(error)
    }
})
app.listen(port,()=>{console.log(`server is running in vishakh ${port}`)})