import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk('cart/createCart', async(owner_id) => {
    console.log(owner_id);
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/carts/${owner_id}`
    , {method: "POST"})
    .then(res => res.json())
    .catch((err) => console.log(err))
});

export const getCart = createAsyncThunk('cart/getCart', async(owner_id, {rejectWithValue}) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/carts/${owner_id}`)
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
});

export const updateCart = createAsyncThunk('cart/updateCart', async({id:owner_id, cart} , {rejectWithValue}) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/carts/${owner_id}`, {
        method: "PATCH", 
        body: JSON.stringify(cart),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .catch((err) => rejectWithValue(err.response.data))
});

var initialState = {
    id: null,
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            console.log("Adding to cart...");
            const cartItems = state.cartItems;
            const { _id, name, image_link, price  } = payload;
            if(cartItems.length){
                for (var cartItem of cartItems){
                    if(_id !== cartItem._id && cartItem === cartItems[cartItems.length - 1]){
                        const newItem = {_id, name, image_link, price, quantity: 1}
                        cartItems.push(newItem);
                        state.amount += (newItem.quantity * newItem.price);
                        state.total += 1;
                        break;
                    }else if (_id === cartItem._id){
                        cartItem.quantity += 1;
                        state.amount += 1 * cartItem.price;
                        state.total += 1;
                        break;
                    }else {
                        continue;
                    }
                }
            }else{
                const newItem = {_id, name, image_link, price, quantity: 1}
                cartItems.push(newItem);
                state.amount += (newItem.quantity * newItem.price);
                state.total += 1;
            }
            state.cartItems = cartItems;
        },
        removeFromCart: (state, { payload }) => {
            console.log("Removing from cart...");
            var cartItems = state.cartItems;
            const { _id, price, quantity } = payload;
            cartItems = cartItems.filter((item) => item._id !== _id);
            state.amount -= (quantity * price);
            state.total -= quantity;
            state.cartItems = cartItems;
        },
        increase: (state, { payload }) => {
            var cartItems = state.cartItems;
            const { _id, price} = payload; 
            state.amount += (price);
            state.total += 1;
            cartItems.forEach((item) => {
                if(item._id === _id){
                    item.quantity += 1;
                }
            })
            state.cartItems = cartItems;
        },
        decrease: (state, { payload }) => {
            var cartItems = state.cartItems;
            const { _id, price} = payload; 
            state.amount -= (price);
            state.total -= 1;
            cartItems.forEach((item) => {
                if(item._id === _id){
                    item.quantity -= 1;
                }
            })
            cartItems = cartItems.filter((item) =>item.quantity > 0);
            state.cartItems = cartItems;
        }
    },
    extraReducers: {
        [getCart.pending]: (state) => {
            state.isLoading=true;
        },
        [getCart.fulfilled]: (state, action) => {
            state.isLoading=false
            const {_id, cartItems, amount, total} = action.payload;
            state.id = _id;
            state.cartItems= cartItems;
            state.amount= amount;
            state.total= total;
        },
        [getCart.rejected]: (state) => {
            state.isLoading=true;

        },
        [updateCart.pending]: (state) => {
            state.isLoading=true;
        },
        [updateCart.fulfilled]: (state) => {
            state.isLoading=false;
        },
        [updateCart.rejected]: (state) => {
            state.isLoading=true;
        },
    }
});




export default cartSlice.reducer;
export const {clearCart, addToCart, removeFromCart, increase, decrease} = cartSlice.actions;