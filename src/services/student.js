import axios from "axios";

// This function returns data for a particular student. It returns null if credentials are invalid or on error
export const login = async ({ email, password }) => {
    try {
        const response = await axios.post("/api/student/login", { email, password });
        const student = response.data;
        return student;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Server responded with error status:", error.response.status);
            console.error("Error data:", error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from the server");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error during request setup:", error.message);
        }

        return null;
    }
};

export const toggleCourseComplete = async (studentId, courseId) => {
    try {
        await axios.post("/api/student/toggleCourse", { studentId, courseId });
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Server responded with error status:", error.response.status);
            console.error("Error data:", error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from the server");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error during request setup:", error.message);
        }

        return null;
    }
};

