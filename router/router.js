const URL = require('url');
const {GET_UNIVERSITIES, CREATE_UNIVERSITY, GET_UNIVERSITYBYID,
       CREATE_PROFESSOR, GET_PROFESSOR, GET_COURSES, CREATE_COURSE, DELETE_COURSE,
       CREATE_STUDENT, UPDATE_STUDENT,
       DELETE_STUDENTBYID, GET_STUDENTSBYUNIVERSITY, GET_STUDENTSBYCOURSE,
       GET_STUDENTRATEBYCOURSE, INSERT_STUDENTTOCOURSE, REMOVE_STUDENTFROMCOURSE,
       SET_MARKFORCOURSE} = require('../constants/route');
const {getUniversityById, getUniversities, addUniversity} = require('../controllers/university.controller');
const {addProfessor, getProfessorByUniversityId} = require('../controllers/persons.controller');
const {getCoursesByUniversityId, deleteCourse, addCourse} = require('../controllers/courses.controller');
const {addStudent, updateStudent,
        getStudentsByUniversityId, getStudentsByCourseId,
        deleteStudentByID} = require('../controllers/students.controller');
const {getStudentRateByCourse, setStudentMarkForCourse,
        insertStudentToCourse, removeStudentsFromCourse} = require('../controllers/student_course.controller');
const {getIndex} = require('../controllers/index.controller');

async function routerHandler(req, res, body) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);
    switch (true) {
        case (req.method === "OPTIONS"):
            res.statusCode = 200;
            return res.end();
        case (pathname === '/'):
                await getIndex('index.html', 'text/html', res);
            //res.end();
            break;
        case (method ==='GET' && pathname === GET_UNIVERSITYBYID):
            ({result, error} = await getUniversityById(query));
            break;
        case (method ==='GET' && pathname === GET_UNIVERSITIES):
            ({result, error} = await getUniversities(query));
            break;
        case (method ==='POST' && pathname === CREATE_UNIVERSITY):
            ({result, error} = await addUniversity(body));
            break;
        case (method ==='POST' && pathname === CREATE_PROFESSOR):
            ({result, error} = await addProfessor(body));
            break;
        case (method ==='GET' && pathname === GET_PROFESSOR):
            ({result, error} = await getProfessorByUniversityId(query));
            break;
        case (method ==='GET' && pathname === GET_COURSES):
            ({result, error} = await getCoursesByUniversityId(query));
            break;
        case (method ==='POST' && pathname === CREATE_COURSE):
            ({result, error} = await addCourse(body));
            break;
        case (method ==='DELETE' && pathname === DELETE_COURSE):
            ({result, error} = await deleteCourse(query));
            break;
        case (method ==='POST' && pathname === CREATE_STUDENT):
            ({result, error} = await addStudent(body));
            break;
        case (method ==='PUT' && pathname === UPDATE_STUDENT):
            ({result, error} = await updateStudent(body));
            break;
        case (method ==='DELETE' && pathname === DELETE_STUDENTBYID):
            ({result, error} = await deleteStudentByID(query));
            break;
        case (method ==='GET' && pathname === GET_STUDENTSBYUNIVERSITY):
            ({result, error} = await getStudentsByUniversityId(query));
            break;
        case (method ==='GET' && pathname === GET_STUDENTSBYCOURSE):
            ({result, error} = await getStudentsByCourseId(query));
            break;
        case (method ==='GET' && pathname === GET_STUDENTRATEBYCOURSE):
            ({result, error} = await getStudentRateByCourse(query));
            break;
        case (method ==='POST' && pathname === INSERT_STUDENTTOCOURSE):
            ({result, error} = await insertStudentToCourse(body));
            break;
        case (method ==='DELETE' && pathname === REMOVE_STUDENTFROMCOURSE):
            ({result, error} = await removeStudentsFromCourse(query));
            break;
        case (method ==='POST' && pathname === SET_MARKFORCOURSE):
            ({result, error} = await setStudentMarkForCourse(body));
            break;
        default:
            await getIndex(pathname, 'text/html', res);
            return ;
            //res.statusCode = 404;
            //return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }
    if (error) {
        res.statusCode = error.status;
        return res.end(JSON.stringify({ error }));
    } else if(result) {
        res.statusCode = result.status;
        res.end(JSON.stringify(result.data));
    }

}
module.exports = {routerHandler};
