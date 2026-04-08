import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: {name: 'Theogne', age: 20, email: 'thoe@gmail.com'}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export default userSlice.reducer