const client = require('../dbconnect');

async function addStudent(first_name, last_name, age, email, university_id) {
    try {
        const result = await client.query(
            `INSERT INTO persons (first_name, last_name, person_role, age, email, university_id)
             VALUES  ('${first_name}', '${last_name}', 'student', '${age}', '${email}', '${university_id}')`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function updateStudent(queryDB, email) {
    try {
        const result = await client.query(`UPDATE persons SET ${queryDB}
             WHERE email = '${email}' AND person_role = 'student';`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function getStudentsByUniversityId(id, name='', page=0, perPage=999) {
    try {
        const result = await client.query(`SELECT * FROM persons
                                           WHERE person_role = 'student'
                                           AND university_id = '${id}'
                                           AND lower(last_name) LIKE lower('%${name}%')
                                           LIMIT ${perPage} OFFSET ${perPage}*${page};`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function getStudentsByCourseId(id, name='',page=0, perPage=999) {
    try {
        const result = await client.query(`SELECT DISTINCT first_name, last_name, email FROM persons
                                           INNER JOIN persons_courses
                                           ON persons.id = persons_courses.person_id
                                           WHERE person_role = 'student'
                                           AND course_id = '${id}'
                                           AND lower(last_name) LIKE lower('%${name}%')
                                           LIMIT ${perPage} OFFSET ${perPage}*${page};`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function deleteStudentByID(id='') {
    try {
        const result = await client.query(`DELETE
                                     FROM persons
                                     WHERE person_role = 'student' AND id = '${id}';`);
        return {result: result.rows};
    }catch (err) {
        return {dbError: error}
    }
}

module.exports = {addStudent, updateStudent,
    getStudentsByUniversityId, getStudentsByCourseId,
    deleteStudentByID};
