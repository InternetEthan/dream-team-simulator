// store.js
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

// console.log(store.getState())
// console.log(addUser())


console.log("1:call dispatch")
store.dispatch(addUser({name: 'Ethan'}))
console.log("store data:",store.getState())
export {addUser};