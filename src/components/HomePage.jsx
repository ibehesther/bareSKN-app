import { Component } from "react";
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
import PageSection from "./PageSection";
import Payment from "./Payment";
import Product from "./Product";
import SignUp from "./SignUp";




class HomePage extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <>
               <Routes>
                   <Route path={'/'} element ={<PageSection/>} ></Route>
                   <Route path={`cart`} element ={<Cart/>} ></Route>
                   <Route path={`payment`} element = {<Payment/>}></Route>
                   <Route path={`checkout`} element={<Checkout/>}></Route>
                   <Route path={`account`} element ={<Account/>} ></Route>
                   <Route path={`order-history`} element={<OrderHistory/>}></Route>
                   <Route path={`edit`} element={<EditAccount/>}></Route>
                   <Route path={`products`} element = {<Product/>}></Route>
                   <Route path={`services`} element = {<Services/>}></Route>
                   <Route path={`blog`} element = {<Blog/>}></Route>
                   <Route path={`blog-posts`} element={<BlogPosts/>}></Route>
                   <Route path={`signup`} element = {<SignUp/>}></Route>
                   <Route path={`login`} element={<Login/>}></Route>
                   <Route path={'*'} element={
                       <main style={{ padding: "1rem" }}>
                           <p>Oops! nothing to see here.</p>
                       </main>
                   }></Route>
               </Routes>
            </>
        )
    }
}

export default HomePage;