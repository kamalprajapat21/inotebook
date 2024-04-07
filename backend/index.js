import connectToMongo from './db.js';
import express from 'express';
import authRoute from './routes/auth.js';
import notesRoute from './routes/notes.js';


connectToMongo();
const port = 5000;
const app = express();
app.use(express.json());


// Available Routes
app.use('/api/auth', authRoute);


app.use('/api/notes', notesRoute);

app.listen(port, () => {
    console.log(`Xnotebook listening on port at http://localhost:${port}`);
});
