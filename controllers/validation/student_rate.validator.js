const Joi = require('joi');

exports.studentRateValidator = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().allow(''),
    page: Joi.number().allow(''),
    perPage: Joi.number().allow('')
});
