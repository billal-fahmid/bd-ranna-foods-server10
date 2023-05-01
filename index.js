const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req,res)=>{
    res.send({name:'Billal Hossen'})
})

app.listen(port,() =>{
    console.log('server is running port no is ' , port)
})