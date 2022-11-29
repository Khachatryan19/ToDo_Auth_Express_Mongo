"use strict"

const bodyParser = require('body-parser');

const env = require('dotenv').config();
const uri = process.env.URI
const mongoose = require('mongoose')
const express = require('express')
const auth = require("./routes/auth.routes")
const todo = require("./routes/todo.routes")
const user = require("./routes/user.routes")
const app = express()
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use('/api/auth', auth)
app.use('/api/todo', todo)
app.use('/api/user', user)

mongoose.connect(uri)

module.exports = app

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
