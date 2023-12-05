
import mongoose from 'mongoose';

const mongoURL = process.env.MONGODB_URI || 'mongodb+srv://santiquinterosj:421LZJngxAbMatMd@challengew3.gkpdfkg.mongodb.net/'

const dbConnection = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }
};

export{
    dbConnection,   
}