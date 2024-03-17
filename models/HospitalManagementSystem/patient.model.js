import mongoose from "mongoose";
import { Hospital } from "./hospital.model";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female"],
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Hospital
    }

},{timestamps:true})

export const Patient = mongoose.Model("Patient",patientSchema)