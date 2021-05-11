const Joi = require("joi");

const registervalidation = data => {
    const schema =Joi.object({
        username : Joi.string().required().alphanum().min(5),
        email: Joi.string().required(),
        password: Joi.string().required().min(7)
    }).unknown();
    return schema.validate(data)
}

module.exports.registervalidation =registervalidation