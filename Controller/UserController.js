const userModel = require("./../models/user.model")
const databaseManager = require("./../databaseManager")
const UserModel = require("./../models/user.model")

const db = new databaseManager(UserModel)

async function getAll(req, res){
    try {
        return res.send(await db.getAll())
    }catch (err){
        res.status(500).send(err)
    }
}

module.exports = {getAll}