const Joi = require('joi');

exports.universityValidator = Joi.object().keys({
    id: Joi.number().allow(''),
    name: Joi.string().allow(''),
    page: Joi.number().allow('',null),
    perPage: Joi.number().allow('',null)
});
