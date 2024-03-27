import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

// Mongo DB Connections
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});




// Routes
const port = process.env.PORT || 3000
// Connection
app.listen(port, ()=>{
    console.log('App running in port : '+port)
})