const {Joi} = require('express-validation')
const validate = require("./../validate")

async function authValidation(req, res, next) {
    const validation =
        Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
        })

    return await validate(req, res, next, validation)
}

module.exports = authValidation