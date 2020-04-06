require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const port = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(routes);

app.listen(port,()=>{
    console.log(`server enable listening ${port}!`)
});

module.exports = app;