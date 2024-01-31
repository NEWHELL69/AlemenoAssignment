import { createSlice } from '@reduxjs/toolkit'
import * as studentService from "../services/student.js"
import * as courseService from "../services/course.js"
import { setNotification } from './notificationReducer.js';

const initialState = null;

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudent(state, action) {
        return action.payload;
    },
    setStudentCourses(state, action) {
      state.courses = action.payload;
    },
    toggleStudentCourseComplete(state, action) {
      const courseToModify = state.courses.find((course) => course.id === action.payload);
      courseToModify.completed = !(courseToModify.completed);
    }
  },
})

export const { setStudent, setStudentCourses, toggleStudentCourseComplete } = studentSlice.actions

export const fetchStudent = (credentials) => {
    return async dispatch => {
        const student = await studentService.login(credentials);

        if(!student){
            dispatch(setNotification("Some error occurred, Try again.", 5))
        }

        dispatch(setStudent(student));
    }
}

export const fetchStudentCourses = () => {
  return async (dispatch, getState) => {
      const student = getState().student;

      if(!student){
        return;
      }

      const courses = await courseService.getSome(student.courses.map(course => course.id));
      
      const studentCourses = student.courses.map((studentCourse) => {
        const courseDetails = courses.find(course => course.id === studentCourse.id);
        return {...courseDetails, ...studentCourse}
      })

      if(!student){
          dispatch(setNotification("Some error occurred fetching student courses, Try again.", 5))
      }

      dispatch(setStudentCourses(studentCourses));
  }
}

export const toggleStudentCourseCompleted = (courseId) => {
  return async (dispatch, getState) => {
    const student = getState().student;

    await studentService.toggleCourseComplete(student.id, courseId);

    dispatch(toggleStudentCourseComplete(courseId));
  }
}

export default studentSlice.reducer;