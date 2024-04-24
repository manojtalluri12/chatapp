const mongoose=require('mongoose')
const todo=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    username:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('todo',todo)