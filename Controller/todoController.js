const todoModel = require("../models/todo.model");
const databaseManager = require("./../databaseManager")

const db = new databaseManager(todoModel)

async function store(req, res){
    try {
        await db.store(req.body)
        res.send('stored')
    }catch (err){
        res.status(500).send(err)
    }
}

async function getAll(req, res){
    try {
        res.send(await db.getAll())
    }catch (err){
        res.status(500).send(err)
    }
}

async function update(req, res){
    try {
        await db.update(req.params.id, req.body)
        res.send('updated')
    }catch (err){
        res.status(500).send(err)
    }
}

async function remove(req, res){
    try {
        await db.delete(req.params.id)
        res.send('removed')
    }catch (err){
        res.status(500).send(err)
    }
}

async function get(req, res){
    try {
        res.send(await db.getById({_id: req.params.id}))
    }catch (err){
        res.status(500).send(err)
    }
}

async function deleteAll(req, res){
    try {
        await db.deleteAll()
        res.send('deleted')
    }catch (err){
        res.status(500).send(err)
    }
}

async function getByUserId(req, res){
    try {
        res.send(await db.getById({user_id: req.params.id}))
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {store, getAll, update, remove, get, deleteAll, getByUserId}