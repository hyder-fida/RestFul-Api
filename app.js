const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// Connecting mongodb 
const URL = 'mongodb+srv://hyderfida14:<password>@cluster0.stmwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URL);

// check wether mongodb connection is created or not or not
mongoose.connection.on('error', (req,res,next) => {
    console.log(error);
})
mongoose.connection.on('connected', (req,res,next) => {
    console.log('Database connected...');
})


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/student', studentRoute);
app.use('/faculty', facultyRoute);


// error handling
app.use((req, res, next) => {
    res.status(400).json({
        error: "cannot find the route"
    })

// app.use((req, res, next) => {
//     res.status(200).json({
//         msg: "app is running"
//     })


});

module.exports = app;