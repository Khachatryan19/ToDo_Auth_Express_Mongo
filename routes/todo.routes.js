const express = require('express')
const authController = require("./../Controller/AuthController")
const todoController = require("./../Controller/todoController")
const todoStoreValidation = require("./../middleware/Validation/todoValidation/store")
const todoUpdateValidation = require("./../middleware/Validation/todoValidation/update")
const checkAuth = require("./../middleware/check.if.auth")
const {validate} = require("express-validation");
const router = express.Router()

router.get('/about', (req, res)=> {
    res.send('about')
})

router.get('/getAll', todoController.getAll).
    post('/store', todoStoreValidation, checkAuth, todoController.store).
    patch('/update/:id', todoUpdateValidation, checkAuth, todoController.update).
    delete('/remove/:id', checkAuth, todoController.remove).
    get('/get/:id', todoController.get).
    delete('/deleteAll', todoController.deleteAll).
    get('/getUser/:id', todoController.getByUserId)

module.exports = router