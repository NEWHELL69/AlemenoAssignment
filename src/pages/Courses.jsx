import { useEffect } from "react";
import { fetchCourses } from "../reducers/coursesReducer";
import { useDispatch, useSelector } from "react-redux";
import "../styles/pages/courses.css"
import { useField } from "../hooks/hooks";
import { createSelector } from '@reduxjs/toolkit'
import { useNavigate } from "react-router-dom";

const DisplayBasicCourseInfo = ({ course }) => {
    const naviagte = useNavigate();

    return (
        <div onClick={() => {
            naviagte("/course/1")
        }} className="courses_displayBasicInfo" >
            <p>Name: <span>{course.name}</span></p>
            <p>Instructor: <span>{course.instructor}</span></p>
        </div>
    )
}

const Courses = () => {
    const dispatch = useDispatch();
    const searchField = useField("search");

    const selectCourses = createSelector((state) => state.courses, (courses) => {
        return courses.filter((course) => (course.name.toLowerCase().includes(searchField.value.toLowerCase()) || course.instructor.toLowerCase().includes(searchField.value.toLowerCase())))  
    })

    const courses = useSelector(state => selectCourses(state));

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch])

    return (
        <div id="courses">
            <label>Search: <input id="courseSearchField" {...searchField} /></label>
            <div id="courses_list">
                {courses.map((course) => {
                    return <DisplayBasicCourseInfo course={course} />
                })}
            </div>
        </div>
    )
}

export default Courses;