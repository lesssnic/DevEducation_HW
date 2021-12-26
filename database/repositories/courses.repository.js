const client = require('../dbconnect');

async function addCourse(body) {
    try {
        const result = await client.query(`INSERT INTO courses (course_name, university_id) 
                                           VALUES ('${body.course_name}', '${body.university_id}')`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function getCoursesByUniversityId(id=0, name='', page=0, perPage=999) {
    try {
        const result = await client.query(`SELECT * FROM courses 
                                           WHERE university_id = ${id} 
                                           AND lower(course_name) LIKE lower('%${name}%') 
                                           LIMIT ${perPage} OFFSET ${perPage}*${page};`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function deleteCourse(body) {
    try {
        const result = await client.query(`DELETE 
                                           FROM courses 
                                           WHERE course_name = '${body.name}'`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

module.exports = {addCourse, getCoursesByUniversityId, deleteCourse};
