import { Component } from "react";
import Appointment from "./Appointment";
import AuthSection from "./AuthSection";
import Blog from "./Blog";
import BlogPosts from "./BlogPosts";
import Card from "./Card";
import Cart from "./Cart";
import Checkout from "./Checkout";
import PageSection from "./PageSection";
import Payment from "./Payment";
import Product from "./Product";
import Account from "./Account";
import Images from "./Images";



class HomePage extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    render() {
        return (
            
            <>
               <Images/>
               <PageSection/>
               <AuthSection/>
               <Appointment/>
               <Product/>
               <BlogPosts/>
               <Blog/>
               <Cart/>
               <Payment/>
               <Checkout/>
                <Account/>
            </>
        )
    }
}

export default HomePage;