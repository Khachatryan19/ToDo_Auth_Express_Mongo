const express = require('express')
const authController = require("./../Controller/AuthController")
const router = express.Router()

router.get('/about', (req, res)=>{
    res.send('about')
})

router.post('/login', authController.login)
router.post('/register', authController.register)

module.exports = router