const coursesRepository = require('../database/repositories/courses.repository');
const validators = require('./validation');

const addCourse = async (body) => {
    const { value, error } = validators.validate(body, validators.courseValidator);
    if (error) return { error };
    body.course_name = body.course_name ?? '';
    body.university_id = body.university_id ?? 0;
    const {dbError, result} = await coursesRepository.addCourse(body);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const getCoursesByUniversityId = async (body) => {
    const { value, error } = validators.validate(body, validators.universityValidator);
    if (error) return { error };
    const id = body.id;
    const name = body.name;
    const page = body.page;
    const perPage = body.perPage;
    const {dbError, result} = await coursesRepository.getCoursesByUniversityId(id, name, page, perPage);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const deleteCourse = async (body) => {
    const { value, error } = validators.validate(body, validators.universityValidator);
    if (error) return { error };
    console.log(body);
    body.name = body.name ?? '';
    const {dbError, result} = await coursesRepository.deleteCourse(body);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

module.exports = {addCourse, getCoursesByUniversityId, deleteCourse};
