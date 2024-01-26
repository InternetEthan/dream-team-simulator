import  { configureStore }  from '@reduxjs/toolkit'
import { usersSlice, addUser, login } from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    },
});
export { addUser, login };