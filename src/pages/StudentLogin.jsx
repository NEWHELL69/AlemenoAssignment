import { useField } from "../hooks/hooks";
import "../styles/pages/studentLogin.css"
import { fetchStudent } from "../reducers/studentReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Notification from "../components/Notification";

const StudentLogin = () => {
    const emailField = useField("text");
    const passwordField = useField("password");
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
                <div>
                    <span>john.doe@example.com</span><br/>
                    <span>password123</span>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin;