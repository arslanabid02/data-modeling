import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    prodctId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref:'product'
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true})

const addressSchema = new moongoose.Schema({
    pincode:{
      type:Number,
      required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},{timestamps:true})

const OrderSchema = mongoose.Schema({

    orderPrice:{
        type:Number,
        default:0

    },
    customer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },   
    orderItems:{
       type:[OrderItemSchema]
    },
    address:{
        type:[addressSchema]
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"]
    }
},{timestamps:true})

export const Order = mongoose.Model("Order",OrderSchema)