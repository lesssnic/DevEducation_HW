exports.idValidator = require('./id.validator').idValidator;
exports.nameValidator = require('./name.validator').nameValidator;
exports.universityValidator = require('./university.validator').universityValidator;
exports.personValidator = require('./person.validator').personValidator;
exports.courseValidator = require('./course.validator').courseValidator;
exports.emailValidator = require('./email.validator').emailValidator;
exports.studentRateValidator = require('./student_rate.validator').studentRateValidator;
exports.setMarkValidator = require('./set_mark.validator').setMarkValidator;
exports.insertStudentValidator = require('./insert_student.validator').insertStudentValidator;

exports.validate = (data, schema) => {
    const result = schema.validate(data, { abortEarly: false });

    if (result.error) {
        const error = { status: 400, data: result.error.message };
        return { error };
    }
    return { value: result.value };
};
