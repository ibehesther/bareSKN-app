import React, {useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Account from "./Account";
import Services from "./Services";
import Blog from "./Blog";
import BlogPosts from "./BlogPosts";
import Cart from "./Cart";
import Checkout from "./Checkout";
import EditAccount from "./EditAccount";
import Login from "./Login";
import OrderHistory from "./OrderHistory";
import LandingPage from "./LandingPage";
import Payment from "./Payment";
import Product from "./Product";
import SignUp from "./SignUp";
import CollectionProductsList from "./CollectionProductsList";
import SubCategoryProductsList from "./SubCategoryProductsList";
import { useSelector, useDispatch } from "react-redux";
import { getCart, updateCart} from "../redux/features/cart/cartSlice";
import { verifyJWT } from '../redux/features/user/userSlice';


function HomePage(props){
    const {isLoading: loading, ...cart  } = useSelector((store) => store.cart);
    const { id } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    
    useEffect(() =>  {
        dispatch(verifyJWT());
        dispatch(getCart(id));
       
    }, [id]);

    useEffect(() => {
        dispatch(updateCart({id, cart}));
    }, [id, cart.cartItems]);

    return (
        <>
            <Routes>
                <Route path={'/'} element ={<LandingPage/>} ></Route>
                <Route path={`cart`} element ={<Cart/>} ></Route>
                <Route path={`payment`} element = {<Payment/>}></Route>
                <Route path={`checkout`} element={<Checkout/>}></Route>
                <Route path={`account`} element ={<Account/>} ></Route>
                <Route path={`order-history`} element={<OrderHistory/>}></Route>
                <Route path={`edit`} element={<EditAccount/>}></Route>
                <Route path={`products/:id`} element = {<Product/>}></Route>
                <Route path={`services`} element = {<Services/>}></Route>
                <Route path={`blog`} element = {<Blog/>}></Route>
                <Route path={`blog-posts`} element={<BlogPosts/>}></Route>
                <Route path={`signup`} element = {<SignUp/>}></Route>
                <Route path={`login`} element={<Login/>}></Route>
                <Route path={`collections/:coll_name/products`} 
                element={<CollectionProductsList/>}></Route>
                <Route path={`subcategories/:coll_name/products`} 
                element={<SubCategoryProductsList/>}></Route>
                <Route path={'*'} element={
                    <main style={{ padding: "1rem" }}>
                        <p>Oops! nothing to see here.</p>
                    </main>
                }></Route>
            </Routes>
        </>
    )
}

export default HomePage;