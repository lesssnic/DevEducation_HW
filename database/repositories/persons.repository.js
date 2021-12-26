const client = require('../dbconnect');

async function addProfessor(body) {
    try {
        const result = await client.query(`INSERT INTO persons (first_name, last_name, person_role, age, email, university_id)
                       VALUES ('${body.first_name}', '${body.last_name}', 'professor', '${body.age}', '${body.email}', '${body.university_id}')`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function getProfessorByUniversityId(id='', name='', page=0, perPage=999) {
    try {
        const result = await client.query(`SELECT * FROM persons 
                                           WHERE university_id = ${id}
                                           AND person_role = 'professor'
                                           AND lower(last_name) LIKE lower('%${name}%') 
                                           LIMIT ${perPage} OFFSET ${perPage}*${page};`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

module.exports = {addProfessor, getProfessorByUniversityId};
