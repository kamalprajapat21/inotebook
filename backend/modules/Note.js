// // notes.js
// import mongoose from 'mongoose';

// const { Schema } = mongoose;

// const NotesSchema = new Schema({
//     user:{
//         type:mongoose.Schema.Types,
//         ref:'user'
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     tag: {
//         type: String,
//         default: 'general' // Corrected default value
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// export default mongoose.model('Notes', NotesSchema); // Export the schema directly as a Mongoose model


import mongoose from 'mongoose';

const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Assuming the user model is named 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'general' // Corrected default value
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Notes', NotesSchema);
