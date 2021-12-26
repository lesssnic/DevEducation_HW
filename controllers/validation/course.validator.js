const Joi = require('joi');

exports.courseValidator = Joi.object().keys({
    course_name: Joi.string().required(),
    university_id: Joi.number().required()
});
