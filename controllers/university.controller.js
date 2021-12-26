const universityRepository = require('../database/repositories/university.repository');
const validators = require('./validation');

const getUniversityById = async (body) => {
    const { value, error } = validators.validate(body, validators.idValidator);
    if (error) return { error };
    const id = body.id;
    console.log(body);
    const {dbError ,result} = await universityRepository.getUniversityById(id);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const addUniversity = async (body) => {
    const { value, error } = validators.validate(body, validators.nameValidator);
    if (error) return { error };
    console.log(value,error);
    const name = body.name;
    const {dbError, result} = await universityRepository.addUniversity(name);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const getUniversities = async (body) => {
    const { value, error } = validators.validate(body, validators.universityValidator);
    if (error) return { error };
    const name = body.name ?? '';
    const page = body.page ?? 0;
    const perPage = body.perPage ?? 999;
    const {dbError, result} = await universityRepository.getUniversities(name, page, perPage);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};
module.exports = {getUniversityById, addUniversity, getUniversities};
