const Joi = require('joi');

exports.emailValidator = Joi.object().keys({
    email: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'))
        .required()
});