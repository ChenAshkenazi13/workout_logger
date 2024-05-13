import mongoose from 'mongoose';

async function connectToMongo() : Promise<void> {
    
    const DBConnectionString : string = 'mongodb://localhost:27017'
    
    try {
        await mongoose.connect(DBConnectionString);
        
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

export { connectToMongo };