import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async(user, {rejectWithValue}) => {
    console.log(JSON.stringify(user))
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/users/login`,
    {
        method: "POST", 
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .catch((err) => console.log(err))
})

export const verifyJWT = createAsyncThunk("user/verifyJWT", async() => {
    const token = localStorage.getItem("token");
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/users/verify_jwt`,
    {
        method: "GET",
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .catch((err) => console.log(err))
})

const initialState = {
    id: null,
    password: null,
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
            const email = e.target.elements.login_email.value;
            const password = e.target.elements.login_password.value;
            if(email && password){
                console.log("Value entered")
                console.log(email, password)
                state.email = email;
                state.password = password;
            }else{
                console.log("No value entered")
            }
            
        }
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.isloading = true;
        },
        [getUser.fulfilled]: (state, {payload}) => {
            console.log("Getting user...")
            state.isloading = false;
            if(payload){
                const{
                    _id: id, first_name, last_name, email,  phone_number, address 
                } = payload.user;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.phone_number = phone_number;
                state.address = address;
                state.password = null;
                localStorage.setItem("token", payload.token);
            }
            
        },
        [getUser.rejected]: (state) => {
            state.isloading = true;
        },
        [verifyJWT.pending]: (state) => {
            state.isloading = true;
        },
        [verifyJWT.fulfilled]: (state, {payload}) => {
            console.log("Verifying token...")
            state.isloading = false;
            if(payload){
                const{
                    _id: id, first_name, last_name, email,  phone_number, address 
                } = payload.user;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.phone_number = phone_number;
                state.address = address;
                localStorage.setItem("token", payload.token);
            }
            console.log(payload);
        },
        [verifyJWT.rejected]: (state) => {
            state.isloading = true;
        }
    }
})

// "email": "admin@example.com",
// "password": "admin_password"

export default userSlice.reducer;
export const { login } = userSlice.actions;