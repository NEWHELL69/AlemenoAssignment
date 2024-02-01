import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './reducers/studentReducer';
import notificationReducer from './reducers/notificationReducer';
import coursesReducer from './reducers/coursesReducer';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    student: studentReducer,
    courses: coursesReducer
  }
})

export default store;