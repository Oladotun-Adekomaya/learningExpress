const express = require('express')
const app = express()

// app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST")
//     res.send("HELLO WE GOT YOUR RESPOND")
// })

// app.get('/',(req,res)=>{
//     res.send("This is our homepage!!")
// })

// app.post('/cats',(req,res)=>{
//     res.send("post to /cats. This is not a get request")
// })

// app.get('/cats', (req,res)=>{
//     res.send("MEOW!!")
// })

// app.get('/dogs',(req,res)=>{
//     res.send("WOOF!!")
// })

app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000!")
})

app.get('/search',(req,res)=>{
    console.log(req.query)
    const {q} = req.query
    if(!q){
        res.send("NOTHIN  IF NOTHING SEARCHED")
    }
    res.send(`<h1>This is the result for: ${q}</h1>`)
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>Welcome to the ${subreddit} subreddit<h1/>`)
})

app.get('/r/:subreddit/:postid',(req,res)=>{
    const {subreddit,postid} = req.params;
    res.send(`<h1>Viewing postID:${postid}, on the ${subreddit} subreddit<h1/>`)
})

app.get('*',(req,res)=>{
    res.send("i dont know this path")
})