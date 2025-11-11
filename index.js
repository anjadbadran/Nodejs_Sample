// index.js
const express = require('express');
const app = express();
const port = 4000;



app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);


app.get('/', (req, res) => {
    res.send({ name: 'Hello ِAnjad, Home Page Here!' });
});

app.post('/send-data', (req, res) => {
    const data = req.body;
    res.json({
        message: "Hi Anjad, Data received successfully!",
        yourData: data
    });
});


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});


