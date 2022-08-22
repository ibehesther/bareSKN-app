import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserCart = createAsyncThunk(
    'cart/getRecentByOwnerId',
    // async(owner_id: string)
)