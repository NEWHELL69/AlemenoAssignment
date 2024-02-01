import { createSlice } from '@reduxjs/toolkit'
import * as courseService from "../services/course.js"
import { setNotification } from './notificationReducer.js';

const initialState = [];

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
        return action.payload;
    },
  },
})

export const { setCourses } = coursesSlice.actions

export const fetchCourses = () => {
    return async dispatch => {
        const courses = await courseService.getAll();

        if(!courses){
            dispatch(setNotification("Some error occurred, Try again.", 5))
        }

        dispatch(setCourses(courses));
    }
}

export default coursesSlice.reducer;