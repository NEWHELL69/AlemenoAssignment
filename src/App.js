import { Route, Routes } from 'react-router-dom'
import StudentDashboard from "./pages/StudentDashboard";
import StudentLogin from "./pages/StudentLogin";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import "./styles/reset.css"
import "./styles/app.css"
import "./styles/globals.css"

function App() {
  // useEffect(() => {
  //   fetch("/api/student/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: "",
  //       password: "",
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch("/api/student").then((res) => {
  //     console.log(res);
  //   })
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<StudentLogin/>}/>
        <Route path="/student" element={<StudentDashboard/>}/>
        <Route path="/course/:id" element={<CourseDetails/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
    </>
  )
}

export default App;
