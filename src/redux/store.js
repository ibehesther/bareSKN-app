import { configureStore} from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice.js';
import userReducer from "./features/user/userSlice.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
      }),
});
