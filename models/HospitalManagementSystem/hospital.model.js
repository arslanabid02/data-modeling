import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type: String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    city:{
        type: String,
        required:true
    },
    pincode:{
        type: String, //in foreign countries pincode is in letters and numbers mix. so it is recommended to use STRING
        required:true
    },
    SpecializedIn:[
        {
            type:String // we are using array, because there might be multiple things in which the hospital is specialized in
        }
    ]

},{timestamps:true})

export const Hospital = mongoose.Model("Hospital",hospitalSchema)