import mongoose from "mongoose"

const SubTodoSchema = new mongoose.Schema({
   content:{
    type:String,
    required:true
   },

   complete:{
    type:Boolean,
    default:false
   },

   createdBy:{
    type:mongoose.Schema.Types.ObjectId,  //reference to User model
    ref:'User'
   }

},{timestamps:true})

export const SubTodo = mongoose.Model("SubTodo", SubTodoSchema)