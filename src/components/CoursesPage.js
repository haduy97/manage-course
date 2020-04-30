import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    },[]);
    
    return (
        <>
            <h2>Courses</h2>
            <Link class="btn btn-primary" to="/manage-course">
                Add Courses
            </Link><br/><br/>
            <CourseList courses={courses} />
        </>
    );
};

export default CoursesPage;