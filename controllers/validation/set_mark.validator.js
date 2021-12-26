const Joi = require('joi');

exports.setMarkValidator = Joi.object().keys({
    course: Joi.string().required(),
    professor: Joi.string().required(),
    student: Joi.string().required(),
    mark: Joi.number().min(1).required()
});
