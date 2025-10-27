const express = require('express')
const axios = require('axios')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


app.get('/', (req,res)=> {
    res.render("index")
})

app.post('/trivia', async(req, res)=>{
    const {amount, category, diffuculty} = req.body;
    const response = await axios.get('https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}')
    const questions = response.data.results;
    res.render("trivia",{question });
})

const PORT = 5001
app.listen(PORT, ()=>{
    console.log("server is running")
})

