const {Joi} = require("express-validation");
const validate = require("./../validate")

async function todoUpdateValidation(req, res, next){
    const validation = Joi.object({
        text: Joi.string().min(3).max(100),
        status: Joi.number(),
        user_id: Joi.string().min(3).max(30)
    })

    return await validate(req, res, next, validation)
}

module.exports = todoUpdateValidation