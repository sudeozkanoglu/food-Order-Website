import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ozkanoglusude:3018112001@cluster0.9pykk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}