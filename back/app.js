const express = require('express')
const app = express()
const PORT = 4000
const axios = require('axios')


app.get('/', (req,res) => {
    res.json({message:"Hola mundo"});
})


app.get('/info', (req,res) => {
    const ts = Date.now();
    const date_ob = new Date(ts);
    const day = date_ob.getDate();
    const month = date_ob.getMonth() + 1;
    const year = date_ob.getFullYear();
    const hours = date_ob.getHours();         
    const minutes = date_ob.getMinutes();    
    const seconds = date_ob.getSeconds();     
    res.json({message:"Este es el taller de docker", 
    date: day + "-" + month + "-" + year,
    time: hours + ":" + minutes + ":" + seconds});
})

app.listen(PORT, ()=>{
    console.log(`App corriendo en el puerto ${PORT}`)
})
