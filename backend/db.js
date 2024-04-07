// db.js
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const mongooseURI = `mongodb://127.0.0.1:27017/inotebook1`;

const connectToMongo = () => {
    mongoose.connect(mongooseURI, () => {
        console.log("Connected to MongoDB successfully");
    });
}

export default connectToMongo;
