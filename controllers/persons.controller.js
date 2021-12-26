const personsRepository = require('../database/repositories/persons.repository');
const validators = require('./validation');

const addProfessor = async (body) => {
    const { value, error } = validators.validate(body, validators.personValidator);
    if (error) return { error };
    body.first_name = body.first_name ?? '';
    body.last_name = body.last_name ?? '';
    body.age = body.age ?? 0;
    const {dbError, result} = await personsRepository.addProfessor(body);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

const getProfessorByUniversityId = async (body) => {
    const { value, error } = validators.validate(body, validators.universityValidator);
    if (error) return { error };
    const id = body.id;
    const name = body.name ?? '';
    const page = body.page ?? 0;
    const perPage = body.perPage ?? 999;
    const {dbError, result} = await personsRepository.getProfessorByUniversityId(id, name, page, perPage);
    if (dbError) return { error: { status: 500, data: { dbError } } };
    return { result: { data: result, status: 200 } };
};

module.exports = {addProfessor, getProfessorByUniversityId};
