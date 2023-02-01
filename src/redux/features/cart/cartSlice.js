import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk('cart/createCart', async() => {
    const token = localStorage.getItem("token");
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/carts`
    ,{
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .catch((err) => console.log(err))
});

export const getCart = createAsyncThunk('cart/getCart', async({rejectWithValue}) => {
    const token = localStorage.getItem("token");
    if(token){
        return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/carts`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .catch((err) => rejectWithValue(err.response.data))
    }
});

export const updateCart = createAsyncThunk('cart/updateCart', async(cart, {rejectWithValue}) => {
    const token = localStorage.getItem("token");
    
    if(cart.id && token){
        const { cartItems, cleared } = cart
        return fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/carts/${cart.id}`, {
            method: "PATCH", 
            body: JSON.stringify({cartItems, cleared}),
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .catch((err) => rejectWithValue(err.response.data))
    }
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
        [createCart.pending]: (state) => {
            state.isLoading=true;
        },
        [createCart.fulfilled]: (state, {payload}) => {
            state.isLoading=false;
            const {_id, cartItems, amount, total} = payload;
            state.id = _id;
            state.cartItems = cartItems;
            state.amount = amount;
            state.total = total;
        },
        [createCart.rejected]: (state) => {
            state.isLoading=true;
        },
        [getCart.pending]: (state) => {
            state.isLoading=true;
        },
        [getCart.fulfilled]: (state, {payload}) => {
            state.isLoading=false;
            if (!payload || !payload.length || payload.error){
                state.id = null;
                state.cartItems= [];
                state.amount= 0;
                state.total= 0;
            }else{
                const {_id, cartItems, amount, total} = payload[0];
                state.id = _id;
                state.cartItems= cartItems;
                state.amount= amount;
                state.total= total;
            }
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