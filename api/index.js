import express from 'express';
const app = express();

app.listen(3000, ()=>{
    console.log('App running in port : '+3000)
})