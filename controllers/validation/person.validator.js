const Joi = require('joi');

exports.personValidator = Joi.object().keys({
    first_name: Joi.string().allow(''),
    last_name: Joi.string().allow(''),
    age: Joi.number().allow(''),
    email: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'))
        .required() ,
    university_id: Joi.number().required()
});
