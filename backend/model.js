

var mongoose =require ("mongoose");
var studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    course:String,
    place:String,

});
var studentModel=mongoose.model("student", studentSchema)
module.exports=studentModel;