const express = require('express')
const userController = require("./../Controller/UserController")
const router = express.Router()

router.get('/about', (req, res) =>{
    res.send("user about")
})

//In the Future only admin should perform this action
router.get('/admin/getAll',  userController.getAll)

module.exports = router
