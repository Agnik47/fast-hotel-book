import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("✅ Database connected"));
        await mongoose.connect(`${process.env.MONGO_URI}/hotel-booking`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;   
