const Joi = require('joi');

exports.nameValidator = Joi.object().keys({
    name: Joi.string().required(),
});
