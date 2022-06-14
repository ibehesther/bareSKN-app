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



class HomePage extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <>
               <img src={require('../images/woman.jpg')} alt=""  className="homepage-img" />
               <PageSection/>
               <PageSection/>
               <PageSection/>
               {/* <AuthSection/> */}
               {/* <Appointment/> */}
               {/* <Product/> */}
               {/* <BlogPosts/> */}
               {/* <Blog/> */}
               {/* <Cart/> */}
               {/* <Payment/> */}
               {/* <Checkout/> */}
              
            </>
        )
    }
}

export default HomePage;