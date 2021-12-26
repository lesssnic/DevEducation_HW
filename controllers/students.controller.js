const studentsRepository = require('../database/repositories/students.repository');
const validators = require('./validation');

const addStudent = async (body) => {
    const { value, error } = validators.validate(body, validators.personValidator);
    if (error) return { error };
    const {dbError, result} = await studentsRepository.addStudent(
        body.first_name, body.last_name, body.age, body.email, body.university_id );
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const deleteStudentByID = async (body) => {
    const { value, error } = validators.validate(body, validators.idValidator);
    if (error) return { error };
    const {dbError, result} = await studentsRepository.deleteStudentByID(body.id);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const getStudentsByUniversityId = async (body) => {
    const { value, error } = validators.validate(body, validators.universityValidator);
    if (error) return { error };
    body.page = (typeof body.page === 'number') ? body.page : 0;
    body.perPage = (typeof body.perPage === 'number') ? body.perPage : 999;
    const {dbError, result} = await studentsRepository.getStudentsByUniversityId(
        body.id, body.name, body.page, body.perPage);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const getStudentsByCourseId = async (body) => {
    const { value, error } = validators.validate(body, validators.universityValidator);
    if (error) return { error };
    body.page = (typeof body.page === 'number') ? body.page : 0;
    body.perPage = (typeof body.perPage === 'number') ? body.perPage : 999;
    const {dbError, result} = await studentsRepository.getStudentsByCourseId(
        body.id, body.name, body.page, body.perPage);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const updateStudent = async (body) => {
    const { value, error } = validators.validate(body, validators.personValidator);
    if (error) return { error };
    const keys = Object.keys(body);
    const queryDB = keys.reduce(
        (acc, item,index) =>
            acc += `${item}='${body[item] ? body[item] : null}', `,'').slice(0, -2);
    const {dbError, result} = await studentsRepository.updateStudent(queryDB, body.email);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

module.exports = {addStudent, updateStudent,
    getStudentsByUniversityId, getStudentsByCourseId,
    deleteStudentByID};
