import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content:{
        type:String, 
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', //refer to the User model
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SubTodo'
        }
    ]//Array of sub-todos
    
},{timestamps:true});

export const Todo = mongoose.Model("Todo",TodoSchema)