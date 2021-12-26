const client = require('../dbconnect');

async function getStudentRateByCourse(id='', name='', page=0, perPage=999) {
    try {
        const result = await client.query(`SELECT last_name, course_name, avg(student_mark) FROM persons_courses
                                           INNER JOIN persons
                                           ON persons_courses.person_id = persons.id
                                           INNER JOIN courses
                                           ON persons_courses.course_id = courses.id
                                           WHERE persons_courses.course_id = '${id}'
                                           AND lower(course_name) LIKE lower('%${name}%')
                                           GROUP BY persons.last_name, courses.course_name
                                           LIMIT ${perPage} OFFSET ${perPage}*${page};`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function insertStudentToCourse(course='', person='') {
    try {
        const result = await client.query(`INSERT
                                           INTO persons_courses (person_id, course_id, student_mark)
                                           SELECT (SELECT id
                                                   FROM persons
                                                   WHERE persons.email = '${person}'),
                                                  (SELECT id
                                                   FROM courses
                                                   WHERE courses.course_name = '${course}'), null 
                                                   WHERE   EXISTS
                                                            (
                                                            SELECT university_id FROM persons 
                                                            WHERE persons.email = '${person}'
                                                            AND persons.person_role = 'student'
                                                            INTERSECT 
                                                            SELECT university_id FROM courses 
                                                            WHERE courses.course_name = '${course}'
                                                            );`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}


async function removeStudentsFromCourse(course='', person='') {
    try {
        const result = await client.query(`DELETE
                                           FROM persons_courses
                                           WHERE course_id = (SELECT id FROM courses
                                                              WHERE course_name = '${course}')
                                             AND person_id = (SELECT id FROM persons
                                                              WHERE email = '${person}'
                                                                AND person_role = 'student')`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

async function setStudentMarkForCourse(course='', student='', professor='', mark=null) {
    try {
        const result = await client.query(`INSERT
                                           INTO persons_courses (person_id, course_id, student_mark)
                                           SELECT (SELECT id
                                                   FROM persons
                                                   WHERE persons.email = '${student}'),
                                                  (SELECT id
                                                   FROM courses
                                                   WHERE courses.course_name = '${course}'), '${mark}' 
                                                   WHERE   EXISTS
                                                            (
                                                            SELECT course_id FROM persons_courses
                                                    INNER JOIN persons
                                                    ON person_id = persons.id
                                                    WHERE persons.email = '${professor}'
                                                    AND persons.person_role = 'professor'
                                                    INTERSECT 
                                                    SELECT course_id FROM persons_courses
                                                    INNER JOIN persons
                                                    ON person_id = persons.id
                                                    WHERE persons.email = '${student}'
                                                    AND persons.person_role = 'student'
                                                    INTERSECT 
                                                    SELECT id FROM courses
                                                    WHERE courses.course_name = '${course}'
                                                            );`);
        return {result: result.rows}
    }catch (error) {
        return {dbError: error}
    }
}

module.exports = {getStudentRateByCourse, setStudentMarkForCourse,
    insertStudentToCourse, removeStudentsFromCourse};
