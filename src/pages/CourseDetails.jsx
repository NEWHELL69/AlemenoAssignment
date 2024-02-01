import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom"
import { fetchCourses } from "../reducers/coursesReducer";
import "../styles/pages/courseDetails.css"

const CourseDetails = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);

    if(courses.length === 0){
        dispatch(fetchCourses());
    }

    const match = useMatch('/course/:id')
    const course = courses.find(course => course.id === `${match.params.id}`);

    if(!course) {
        return (
            <>
                <p>Course Not found</p>
            </>
        )
    }

    return (
        <>
            <div id="courseDetails">
                <div>
                    <img src={course.thumbnail} alt="" />
                    <p className="heading">Course Name: </p>
                    <p>{course.name}</p>

                    <p className="heading">Instructor's name: </p>
                    <p>{course.instructor}</p>

                    <p className="heading">Description: </p>
                    <p>{course.description}</p>

                    <p className="heading">Enrollment status: </p>
                    <p>{course.enrollmentStatus}</p>

                    <p className="heading">Course duration: </p>
                    <p>{course.duration}</p>

                    <p className="heading">Schedule: </p>
                    <p>{course.schedule}</p>

                    <p className="heading">Location: </p>
                    <p>{course.location}</p>

                    <p><span className="heading">Course Pre-requisites: </span></p>
                    {course.prerequisites.map((prerequisite, index) => <><span>{index+1} {prerequisite}</span><br/></>)}

                    <details>
                        <summary>Syllabus</summary>
                        <div>
                            {course.syllabus.map((week, index) => {
                                return (
                                    <div>
                                        <p className="heading">Week {index+1}</p>
                                        <p style={{ marginLeft: "6px" }} className="heading">Topic: </p>
                                        <p style={{ marginLeft: "12px" }}>{week.topic}</p>
                                        <p style={{ marginLeft: "6px" }} className="heading">content: </p>
                                        <p style={{ marginLeft: "12px" }} >{week.content}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </details>
                </div>
            </div>
        </>
    )
}


export default CourseDetails;