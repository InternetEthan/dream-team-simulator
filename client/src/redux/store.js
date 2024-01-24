import  { configureStore }  from '@reduxjs/toolkit'
// import userReducer from './reducers';
import { usersSlice, addUser } from './slices/usersSlice';
// import { playersSlice } from './slices/playersSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        // players: playersSlice.reducer
    },
});

export {addUser};
// export {addPlayer};