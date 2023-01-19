import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk("user/createUser", async(user, {rejectWithValue}) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/signup`,
    {
        method: "POST", 
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
})
export const getUser = createAsyncThunk("user/getUser", async(user, {rejectWithValue}) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/signin`,
    {
        method: "POST", 
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
})
export const getGuest = createAsyncThunk("user/getGuest", async(user, {rejectWithValue}) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/signin_guest`,
    {
        method: "POST"
    })
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
})

export const deleteUser = createAsyncThunk("user/deleteUser", async(user_id, {rejectWithValue}) => {
    const token = localStorage.getItem("token");
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/users/${user_id}`,
    {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
})

export const verifyJWT = createAsyncThunk("user/verifyJWT", async(user,{rejectWithValue}) => {
    const token = localStorage.getItem("token");
    if(token){
        return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/verify_jwt`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .catch((err) => rejectWithValue(err.response.data))
    }
    
})

const initialState = {
    id: null,
    password: null,
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    address: null,
    type: null,
    isloading: true,
    error: false
};

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
                state.email = email;
                state.password = password;
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
        [createUser.pending]: (state) => {
            state.isloading = true;
        },
        [createUser.fulfilled]: (state, {payload}) => {
            console.log("Creating user...")
            state.isloading = false;
            state.error = false;
            if(payload && payload.user && payload.token){
                const{
                    _id: id, first_name, last_name, email,  phone_number, address, type
                } = payload.user;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.phone_number = phone_number;
                state.address = address;
                state.type= type;
                state.password = null;
                localStorage.setItem("token", payload.token);
            }else if (payload.error){
                state.error = true;
            }
        },
        [createUser.rejected]: (state) => {
            state.isloading = true;
        },
        [getUser.pending]: (state) => {
            state.isloading = true;
        },
        [getUser.fulfilled]: (state, {payload}) => {
            console.log("Getting user...")
            state.isloading = false;
            state.error = false;
            if(payload && payload.user && payload.token){
                const{
                    _id: id, first_name, last_name, email,  phone_number, address, type
                } = payload.user;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.phone_number = phone_number;
                state.address = address;
                state.type= type;
                state.password = null;
                localStorage.setItem("token", payload.token);
            }else if (payload.error){
                state.error = true;
            }
        },
        [getUser.rejected]: (state) => {
            state.isloading = true;
        },
        [getGuest.pending]: (state) => {
            state.isloading = true;
        },
        [getGuest.fulfilled]: (state, {payload}) => {
            console.log("Getting guest...")
            state.isloading = false;
            if(payload && payload.user && payload.token){
                const{
                    _id: id, first_name, last_name, email,  phone_number, address, type
                } = payload.user;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.phone_number = phone_number;
                state.address = address;
                state.type = type;
                state.password = null;
                localStorage.setItem("token", payload.token);
            }
        },
        [getGuest.rejected]: (state) => {
            state.isloading = true;
        },
        [deleteUser.pending]: (state) => {
            state.isloading = true;
        },
        [deleteUser.fulfilled]: (state, {payload}) => {
            console.log("Deleting guest...")
            state.isloading = false;
        },
        [deleteUser.rejected]: (state) => {
            state.isloading = true;
        },
        [verifyJWT.pending]: (state) => {
            state.isloading = true;
        },
        [verifyJWT.fulfilled]: (state, {payload}) => {
            console.log("Verifying token...")
            state.isloading = false;
            if(payload && payload.user && payload.token){
                const{
                    _id: id, first_name, last_name, email,  phone_number, address, type
                } = payload.user;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.phone_number = phone_number;
                state.address = address;
                state.type = type;
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