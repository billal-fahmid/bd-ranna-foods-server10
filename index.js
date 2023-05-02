const express = require('express');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())

const chefs = require('./chefs.json')
const recipes = require('./recipes.json')

app.get('/chefs', (req,res)=>{
    res.send(chefs);
})


app.get('/chefs/:id', (req, res) =>{
    const id =req.params.id;
    const chef = chefs.find(cf => cf.chefId == id);
    res.send(chef)
})

app.get('/recipes', (req, res) =>{
    res.send(recipes);
})

app.get('/recipes/:id' , (req,res) =>{
    const id = req.params.id;
    const chefRecipes = recipes.filter(recipe => recipe.chefId == id);
    // console.log(chefRecipes)
    res.send(chefRecipes)
})


app.listen(port,() =>{
    console.log('server is running port no is ' , port)
})