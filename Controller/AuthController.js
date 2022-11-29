const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require("./../models/user.model")

async function login(req, res) {
    const email = req.body.email
    try {
        const user = await userModel.findOne({email})

        if (!user) {
            return res.status(401).send('email does not exist')
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isMatch) {
            return res.status(401).send('wrong password')
        }

        const token = user.generateToken()

        res.json({
            user, token
        })
    }catch (err) {
        return res.status(500).send(err)
    }
}

async function register(req, res) {
    try {
        const user = await userModel.create(req.body)

        const token = user.generateToken()
        return res.json({
            user,
            token,
        });
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = {login, register}