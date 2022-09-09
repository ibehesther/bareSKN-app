import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async(user, {rejectWithValue}) => {
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
            "Authorization": `Bearer ${token}`
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
            console.log("Logging in...")
            const {e} = payload;
            e.preventDefault();
            const email = e.target.elements.login_email.value;
            const password = e.target.elements.login_password.value;
            if(email && password){
                console.log("Value entered")
                state.email = email;
                state.password = password;
            }else{
                console.log("No value entered")
            }
        },
        logout: (state) => {
            console.log("Logging out...")
            localStorage.removeItem("token");
            state.id= null;
            state.password= null;
            state.first_name= null;
            state.last_name= null;
            state.email= null;
            state.phone_number= null;
            state.address= null;
        }
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.isloading = true;
        },
        [getUser.fulfilled]: (state, {payload}) => {
            console.log("Getting user...")
            state.isloading = false;
            if(payload.user && payload.token){
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
        },
        [verifyJWT.rejected]: (state) => {
            state.isloading = true;
        }
    }
})


export default userSlice.reducer;
export const { login, logout } = userSlice.actions;