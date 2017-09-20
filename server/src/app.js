const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello world!'
    });
});

app.post('/register', (req, res) => {
    console.log('registration request has come for', req.body.email);
    res.send({
        message: `Hello ${req.body.email}, you've been registered`
    });
});

app.listen(process.env.PORT || 8081);
