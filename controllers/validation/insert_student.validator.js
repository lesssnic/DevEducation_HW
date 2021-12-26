const Joi = require('joi');

exports.insertStudentValidator = Joi.object().keys({
    course_name: Joi.string().required(),
    person_name: Joi.string().required()
});
