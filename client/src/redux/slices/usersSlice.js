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
        login(state, action) {
            state.users.push(action.payload);
        }
    }
})

export const { addUser, login } = usersSlice.actions;  // export actions
export { usersSlice }; // export slice