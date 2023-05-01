const express = require('express');

const app = express();
const port = 5000;

const chefs = require('./chefs.json')

app.get('/chefs', (req,res)=>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) =>{
    const id =req.params.id;
    const chef = chefs.find(cf => cf.chefId == id);
    res.send(chef)
})


app.listen(port,() =>{
    console.log('server is running port no is ' , port)
})