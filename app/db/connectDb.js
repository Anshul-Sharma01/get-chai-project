import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`mongodb+srv://anshulsharma:anshul123@cluster0.luebml7.mongodb.net/patreon-clone`);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }catch(err){
        console.error(err?.message);
        process.exit(1);
    }
}

export default connectDB;
