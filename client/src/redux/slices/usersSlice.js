import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],

    },
    reducers: {
        addUser (state, action) {
            // console.log(state)
            console.log("2:call reducer in slice")
            // console.log("actions", action.payload)
            state.users.push(action.payload);
        }
    }
})

// export actions
export const { addUser } = usersSlice.actions;
// export slice
export { usersSlice };