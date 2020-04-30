import React, { useState } from 'react';
import { Prompt, Redirect } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from "../api/courseApi";

const ManageCoursePage = () => {
    const [courseInfo, setCourseInfo] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    const _onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCourseInfo({ ...courseInfo, [name]: value });

    }
    const _onAdd = (e) => {
        courseApi.saveCourse(courseInfo)
    }
    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Bạn có muốn thoát ?" /> */}
            <CourseForm
                courseInfo={courseInfo}
                _onChange={_onChange}
                _onAdd={_onAdd}
            />
        </>
    );
};

export default ManageCoursePage;