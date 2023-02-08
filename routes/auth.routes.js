const express = require('express')
const authController = require("./../Controller/AuthController")
const authValidation = require("./../middleware/Validation/authValidation/auth")
const router = express.Router()

console.log('test')

router.get('/about', (req, res)=>{
    res.send('about')
})

router.post('/login', authValidation, authController.login)
router.post('/register', authValidation, authController.register)

module.exports = router