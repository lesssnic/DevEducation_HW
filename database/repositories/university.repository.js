const client = require('../dbconnect');

async function getUniversityById(id) {
    try {
        const result = await client.query(`SELECT name FROM universities WHERE id=${id}`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function getUniversities(name='', page=0, perPage=999) {
    try {
        const result = await client.query(`SELECT name FROM universities 
                                           WHERE lower(name) LIKE lower('%${name}%') 
                                           LIMIT ${perPage} OFFSET ${perPage}*${page};`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function addUniversity(name) {
    try {
        const result = await client.query(`INSERT INTO universities (name) VALUES ('${name}')`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error.detail}
    }
}

async function listUniversity({...param}) {
    const result = await client.query('');
    return result.rows;
}

module.exports = {addUniversity, getUniversityById, getUniversities};
