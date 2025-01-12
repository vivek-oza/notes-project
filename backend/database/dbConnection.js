import mongoose from 'mongoose';

// Connect to MongoDB
export const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected to: ${connection.connection.host}`);
    } catch(error){
        console.log(`Error: ${error.message}`);
    }
}