const express = require('express');
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.get('/', (req, res) =>{
    res.send('Hello from Express.js!');
})


app.get('/users/:id', (req, res)=>{
    const userID = req.userId = req.params.id;
    res.send(`User ID: ${userID}`);
})

app.post('/submit', (req, res) =>{
    const userData = req.body;
    res.send(`Data received: Name: ${userData.name}, Email: ${userData.email}`);
})

app.use((req,res)=>{
    res.status(404).send('Page not Found');
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
})
