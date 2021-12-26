module.exports = {
    GET_UNIVERSITIES: '/get-universities',
    GET_UNIVERSITYBYID: '/get-university-by-id',
    CREATE_UNIVERSITY: '/create-university',

    CREATE_PROFESSOR: '/create-professor',
    GET_PROFESSOR: '/get-professor-by-university-id',

    GET_COURSES: '/get-courses-by-university-id',
    CREATE_COURSE: '/create-course',
    DELETE_COURSE: '/delete-course',

    CREATE_STUDENT: '/create-student',
    UPDATE_STUDENT: '/update-student',
    DELETE_STUDENTBYID: '/delete-student-by-id',
    GET_STUDENTSBYUNIVERSITY: '/get-students-by-university-id',
    GET_STUDENTSBYCOURSE: '/get-students-by-course-id',

    GET_STUDENTRATEBYCOURSE: '/get-student-rate-by-course',
    INSERT_STUDENTTOCOURSE:'/insert-student-to-course',
    REMOVE_STUDENTFROMCOURSE: '/remove-student-from-course',
    SET_MARKFORCOURSE: '/set-mark-for-course'
}
