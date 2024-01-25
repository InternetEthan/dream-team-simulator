import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
    },
    reducers: {
        addUser (state, action) {
            state.users.push(action.payload);
        },
        loginUser(state, action) {
            state.users.push = action.payload;
        }
    }
})

export const { addUser, loginUser } = usersSlice.actions;  // export actions
export { usersSlice }; // export slice