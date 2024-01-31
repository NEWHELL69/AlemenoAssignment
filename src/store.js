import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './reducers/studentReducer';
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    student: studentReducer
  }
})

export default store;