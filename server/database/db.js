
import mongoose from "mongoose";



const connection = ()=>{
    const DB_URI =`mongodb+srv://av2000546:Abhishek123@abhi.d9npa.mongodb.net/?retryWrites=true&w=majority&appName=Abhi`;
        try {
            mongoose.connect(DB_URI,{useNewUrlParser: true})
            console.log(`database connected`)
        } catch (error) {
            console.log('error while connecting database',error.message);
        }
}

export default connection;