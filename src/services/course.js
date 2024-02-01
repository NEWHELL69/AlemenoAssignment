import axios from "axios";

// This function returns data for a particular student. It returns null if credentials are invalid or on error
export const getSome = async (courseIds) => {
    try {
        const response = await axios.post("/api/courses", courseIds);
        return response.data;
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

export const getAll = async () => {
    try {
        const response = await axios.get("/api/courses");
        return response.data;
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

