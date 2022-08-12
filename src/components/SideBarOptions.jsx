import { Component, createRef } from "react";
import {Link} from 'react-router-dom'
import { DropDown } from "./DropDown";
import SideBarProductsOptions from "./SideBarProductOptions";

class SideBarOptions extends Component {
    constructor (props) {
        super(props)
        this.state = {
            productsDropDown : false
        }
        this.dropdownbar1 = createRef();
        this.dropdownbar2 = createRef();
    }
    
    
    showMore = () => {
        this.setState((state, props) => ({productsDropDown : !state.productsDropDown}))
        if (this.state.productsDropDown) {
            this.dropdownbar1.current.style.animationName = 'showmore2'
            this.dropdownbar2.current.style.animationName = 'showmore1'
        } else {
            this.dropdownbar1.current.style.animationName = 'showmore1'
            this.dropdownbar2.current.style.animationName = 'showmore2'
        }
    }
    render(){
        return(
            <div className="sidebar-options">
                <Link onClick={this.props.toogleSideBar} to={`/`}className="options"><span > HOME</span></Link>
                <div className="sidebar-products-container options">
                    <span className="sidebar-products">
                        <Link onClick={this.props.toogleSideBar} to={`/`} className="sidebar-title">
                            <div> PRODUCTS</div>
                        </Link>
                        <DropDown showMore={this.showMore} 
                        ref={{dropdownbar1:this.dropdownbar1, dropdownbar2:this.dropdownbar2}}/>
                    </span> 
                    {/* {this.state.productsDropDown &&
                     <SideBarProductsOptions toogleSideBar={this.props.toogleSideBar}/> } */}
                     <SideBarProductsOptions show={this.state.productsDropDown}
                     toogleSideBar={this.props.toogleSideBar}/>
                    
                </div>
                <Link onClick={this.props.toogleSideBar} to={`/services`} className="options"> <span >  SERVICES</span></Link>
                <Link onClick={this.props.toogleSideBar} to={`/blog-posts`} className="options"><span >  BLOG</span></Link>
            </div>
        )
    }
   
}

export default SideBarOptions;