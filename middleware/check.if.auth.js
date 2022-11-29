const jwt = require("jsonwebtoken");

async function checkIfAuth(req, res, next){
    const token = req.header('authorization');
    if (!token) {
        return res.status(404).send('token not found')
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        next()
    } catch (err) {
        return res.status(401).send('not authenticated');
    }
}

module.exports = checkIfAuth