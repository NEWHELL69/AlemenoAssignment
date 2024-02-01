import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/pages/studentDashboard.css";
import { useEffect, useState } from "react";
import { fetchStudentCourses, toggleStudentCourseCompleted } from "../reducers/studentReducer";
import Notification from "../components/Notification";

const Course = ({ course }) => {
    const dispatch = useDispatch();
    const [completedCheckBox, setCompletedCheckBox] = useState(course.completed)
    const [completeCheckBoxDisable, setCompleteCheckBoxDisable] = useState(false)

    const toggleCourseComplete = (courseId) => {
        setCompleteCheckBoxDisable(true);
        setCompletedCheckBox(state => !state);

        dispatch(toggleStudentCourseCompleted(courseId)).then(() => {
            setCompleteCheckBoxDisable(false);
        })
    }

    return (
        <div className="studentDashboardCourse">
            <div className="textualInfo">
                <p className="heading">Name: </p>
                <p>{course.name}</p>
                <p className="heading">Instructor: </p>
                <p>{course.instructor}</p>
                {course.completed ? <></> :
                    <>
                        <p className="heading">Due date: </p>
                        <p>{course.dueDate}</p>
                        <p><span className="heading">progress:</span> {course.progress}%</p>
                    </>
                }
                <label><span className="heading">Completed: </span><input disabled={completeCheckBoxDisable} onChange={() => toggleCourseComplete(course.id)} type="checkbox" checked={completedCheckBox}></input></label>
            </div>
            <div className="courseImage">
                <img src={course.thumbnail} alt="" />
            </div>
        </div>
    )
};

const StudentDashboard = () => {
    const student = useSelector(state => state.student);
    const dispatch = useDispatch();
    const [studentCoursesFetched, setStudentCoursesFetched] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchStudentCourses()).then(() => {
            setStudentCoursesFetched(true)
        })
    }, [dispatch])

    if(!student) {
        return <Navigate to="/"/>;
    }

    return (
        <div id="studentDashboard">
            <div>
                <button style={{ width: "100%" }} onClick={() => {navigate("/courses")}}>View all the courses</button>
                <Notification/>
                <div id="studentInformation">
                    <h2>Name: {student.name}</h2>
                    <h2>Email: {student.email}</h2>
                </div>
                <div>
                    {!studentCoursesFetched ? <p>Error fetching courses</p>
                    : (
                        <>
                            <h2>Courses enrolled in: </h2>
                            <div id="studentCourses">
                                {student.courses.map((course) => <Course course={course}/>)}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard;