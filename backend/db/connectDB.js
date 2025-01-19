import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)    
        console.log(`MongoDB connected: ${conn.connection.host}`);
        // console.log('test from success');
    } catch (error) {
        console.log(`Error in connection: ${error.message}`);
        // console.log('test from failure');
        process.exit(1)     // Status code: 1 is Failure, 0 is Success
    }
}