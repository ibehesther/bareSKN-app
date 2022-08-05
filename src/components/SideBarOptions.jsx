import { Component, createRef } from "react";
import {Link} from 'react-router-dom'
import SideBarProductsOptions from "./SideBarProductOptions";

class SideBarOptions extends Component {
    constructor (props) {
        super(props)
        this.state = {
            productsDropDown : false
        }
        this.showmore1 = createRef();
        this.showmore2 = createRef();
        this.showMore = this.showMore.bind(this);
    }
    
    
    showMore = () => {
        this.setState((state, props) => ({productsDropDown : !state.productsDropDown}))
        if (this.state.productsDropDown) {
            this.showmore1.current.style.animationName = 'showmore2'
            this.showmore2.current.style.animationName = 'showmore1'
        } else {
            this.showmore1.current.style.animationName = 'showmore1'
            this.showmore2.current.style.animationName = 'showmore2'
        }
        
    }
    render(){
        return(
            <div className="sidebar-options">
                {/* <Link onClick={this.props.toogleSideBar} to={`/`}className="options"><span > HOME</span></Link> */}
                <div className="sidebar-products-container options">
                    <span className="sidebar-products">
                        <Link onClick={this.props.toogleSideBar} to={`/products`} className="sidebar-title"><div > PRODUCTS</div></Link>
                        <div className="sidebar-show-more-icon" onClick= {this.showMore}>
                            <div className="sidebar-show-more-line-1" ref={this.showmore1} ></div>
                            <div className="sidebar-show-more-line-2" ref={this.showmore2}></div>
                        </div>
                    </span> 
                    {this.state.productsDropDown?<SideBarProductsOptions/>: <div></div> }
                    
                </div>
                <Link onClick={this.props.toogleSideBar} to={`/services`} className="options"> <span >  SERVICES</span></Link>
                <Link onClick={this.props.toogleSideBar} to={`/blog-posts`} className="options"><span >  BLOG</span></Link>
            </div>
        )
    }
   
}

export default SideBarOptions;