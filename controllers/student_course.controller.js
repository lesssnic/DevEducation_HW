const studentCourseRepository = require('../database/repositories/student_course.repository');
const validators = require('./validation');

const getStudentRateByCourse = async (body) => {
    const { value, error } = validators.validate(body, validators.studentRateValidator);
    if (error) return { error };
    const {dbError, result} = await studentCourseRepository.getStudentRateByCourse(
        body.id, body.name, body.page, body.perPage);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const setStudentMarkForCourse = async (body) => {
    const { value, error } = validators.validate(body, validators.setMarkValidator);
    if (error) return { error };
    const {dbError, result} = await studentCourseRepository.setStudentMarkForCourse(
        body.course, body.student, body.professor, body.mark);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const insertStudentToCourse = async (body) => {
    const { value, error } = validators.validate(body, validators.insertStudentValidator);
    if (error) return { error };
    const {dbError, result} = await studentCourseRepository.insertStudentToCourse(body.course_name, body.person_name);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const removeStudentsFromCourse = async (body) => {
    const { value, error } = validators.validate(body, validators.insertStudentValidator);
    if (error) return { error };
    const {dbError, result} = await studentCourseRepository.removeStudentsFromCourse(body.course_name, body.person_name);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

module.exports = {getStudentRateByCourse, setStudentMarkForCourse,
    insertStudentToCourse, removeStudentsFromCourse};
