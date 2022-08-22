import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    cartItems: [],
    amount: 10,
    total: 0,
    isLoading: true
}
// fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/cart/${encodeURIComponent(user_id)}`)
//     .then(res => res.json())
//     .then(({...cart}) => {
//        Object.assign(initialState, {...cart});
//     });

const cartSlice = createSlice({
    name: 'cart',
    initialState
});




export default cartSlice.reducer