async function validate(req, res, next, validation){
    const error = validation.validate(req.body).error

    if (error) {
        return res.status(422)
            .send(error);
    }

    return next()
}

module.exports = validate

