import mongoose from "mongoose";
import { Hospital } from "./hospital.model";

const HoursInHospitalSchema = new mongoose.Schema({
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Hospital
    },
    Hours:{
        type:Number,
        required:true
    }
},{timestamps:true})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0,
        required:true
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Hospital,
        }
    ],
    HoursInHospital:{
           type:[HoursInHospitalSchema]
    }


    

},{timestamps:true})

export const Doctor = mongoose.Model("Doctor",doctorSchema)