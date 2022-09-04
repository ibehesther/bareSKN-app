import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUser = createAsyncThunk("user/getUser", async(user, {rejectWithValue}) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/users`,
    {
        method: "PATCH", 
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
})

const initialState = {
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    address: null,
    isloading: true
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            const {e} = payload;
            e.preventDefault();
            console.log(e.target.elements.login_email.value);
            console.log(e.target.elements.login_password.value);
            
        }
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.isloading = true;
        },
        [getUser.fulfilled]: (state) => {
            state.isloading = false;
        },
        [getUser.rejected]: (state) => {
            state.isloading = true;
        }
    }
})


export default userSlice.reducer;
export const { login } = userSlice.actions;