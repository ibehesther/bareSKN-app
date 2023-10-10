import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
	return fetch(
		`${process.env.REACT_APP_API_URL}/api/v1.0/products?limit=66&page=1`,
		{
			method: "GET",
			headers: {
				"Content-type": "application/json",
			},
		}
	)
		.then((res) => res.json())
		.catch((err) => console.log(err.response.data));
});

export const getCollections = createAsyncThunk(
	"product/getCollections",
	async () => {
		return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/collections`, {
			method: "GET",
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.catch((err) => console.log(err.response.data));
	}
);


const initialState = {
	products: [],
	categories: [],
	collections: [],
	isLoading: true,
	error: {},
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		// login: (state, {payload}) => {
		//     console.log("Logging in...")
		//     const {e} = payload;
		//     e.preventDefault();
		//     const email = e.target.elements.login_email.value;
		//     const password = e.target.elements.login_password.value;
		//     if(email && password){
		//         state.email = email;
		//         state.password = password;
		//     }
		// },
		// logout: (state) => {
		//     console.log("Logging out...")
		//     localStorage.removeItem("token");
		//     state.id= null;
		//     state.password= null;
		//     state.first_name= null;
		//     state.last_name= null;
		//     state.email= null;
		//     state.phone_number= null;
		//     state.address= null;
		// }
	},
	extraReducers: {
		[getProducts.pending]: (state) => {
			state.isLoading = true;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = false;
			if (payload && payload.products) {
				state.products = payload.products;
			} else if (payload.error) {
				state.error = true;
			}
		},
		[getProducts.rejected]: (state) => {
			state.isLoading = true;
		},
		[getCollections.pending]: (state) => {
			state.isLoading = true;
		},
		[getCollections.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.error = false;
			if (payload && payload.collections) {
				state.collections = payload.collections;
			} else if (payload.error) {
				state.error = true;
			}
		},
		[getCollections.rejected]: (state) => {
			state.isLoading = true;
		},
	},
});

export default productSlice.reducer;
// export const { login, logout } = userSlice.actions;
