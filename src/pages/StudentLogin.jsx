import { useField } from "../hooks/hooks";
import "../styles/pages/studentLogin.css"
import { fetchStudent } from "../reducers/studentReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Notification from "../components/Notification";

const StudentLogin = () => {
    const emailField = useField("text", "alice@example.com");
    const passwordField = useField("password", "password123");
    const dispatch = useDispatch();
    const student = useSelector(state => state.student);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchStudent({ email: emailField.value, password: passwordField.value }));
    }

    if(student){
        return <Navigate to="/student"/>;
    }

    return (
        <div id="studentLogin">
            <div className="center">
                <Notification/>
                <h1>Student Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email: <input {...emailField}/></label>
                    <label>Password: <input {...passwordField}/></label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default StudentLogin;