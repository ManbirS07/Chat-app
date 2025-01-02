import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const conntoMONGO_DB=async(url)=>
{
    try
    {
    (await mongoose.connect(url))
    } catch(err)
    {
        console.log(err);   
    }
}