import  { configureStore }  from '@reduxjs/toolkit'
import { usersSlice, addUser, loginUser } from './slices/usersSlice';
// import { playersSlice } from './slices/playersSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        // players: playersSlice.reducer
    },
});
export { addUser, loginUser };
// export {addPlayer};