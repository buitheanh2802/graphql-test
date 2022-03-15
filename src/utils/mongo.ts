import mongoose from "mongoose"

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('database is connected !');
    } catch (error) {
        console.log(`error connect to mongoDB : ${error.message}`);
    }
}