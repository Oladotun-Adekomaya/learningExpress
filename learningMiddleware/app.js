const express = require('express');
const app = express();
const morgan = require('morgan')

const verifyPassword = function(req,res,next){
    const {password} = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('sorry you need a password')
} 


app.use(morgan('tiny'))

app.use((req,res,next) => {
    req.requestTime = Date.now();
    next()
})

// app.use('/dogs',(req,res,next) =>{
//     console.log('i love dogs');
//     const {password} = req.query;
//     if (password === 'chickennugget') {
//         next();
//     }   
// })

// app.use((req,res,next) => {
//     console.log('This is my first middleware');
//     next();
// })
// app.use((req,res,next) => {
//     console.log('This is my second middleware');
//     next();
// })







app.get('/',(req,res) => {
    res.send('HOME PAGE')
    console.log(`REQUEST DATE: `)
})

app.get('/dogs',(req,res) => {
    res.send('WOOF')
})

app.get('/secrets',verifyPassword,(req,res) => {
    res.send('This is my secret page')
})

app.use((req,res) => {
    res.status(404).send('NOT FOUND!')
})


app.listen(3000, () => {
    console.log('App is running on port 3000')
})