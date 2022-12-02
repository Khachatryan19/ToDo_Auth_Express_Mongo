const {Joi} = require("express-validation");
const validate = require("./../validate")

async function todoStoreValidation(req, res, next) {
    const validation =
        Joi.object({
            text: Joi.string().min(3).max(100).required(),
            status: Joi.number().required(),
            user_id: Joi.string().min(3).max(30).required()
        })

    return await validate(req, res, next, validation)
}

module.exports = todoStoreValidation