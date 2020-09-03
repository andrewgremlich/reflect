import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/Auth/loginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
