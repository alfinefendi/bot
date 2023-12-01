import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(window?.localStorage.getItem("user")) ?? {},
    edit: false, 
};

const userSlice = createSlice({
    name: "user", 
    initialState, 
    reducers: {
        login(state, action) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
     },
});



export default userSlice.reducer;


export function UserLogin() {
    return (dispatch, getState) => {
        dispatch(userSlice.action.login());
    };  
}

export function Logout() {
    return (dispatch, getState) => {
        dispatch(userSlice.action.logout());
    };  
}


export function updateProfile() {
    return (dispatch, getState) => {
        dispatch(userSlice.action.updateProfile());
    };  
}