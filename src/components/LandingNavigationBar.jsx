import { useRef } from 'react';
import {Link } from 'react-router-dom';

function LandingNavigationBar(props) {
    const bar1 = useRef();
    const bar2 = useRef();
    const bar3 = useRef();

    function toogleHamburgerIcon(){
        console.log(props.isSideBarOpen)
        if (props.isSideBarOpen){
            bar1.current.style.animationName = '';
            bar3.current.style.animationName = '';
            bar2.current.style.display = 'block';

        }else{
            bar1.current.style.animationName = 'navbarline1_open';
            bar3.current.style.animationName = 'navbarline3_open';
            bar2.current.style.display = 'none';
            bar1.current.style.animationDirection = 'normal';
            bar3.current.style.animationDirection = 'normal';
        }
        
        
    }
    // toogleHamburgerIcon();
    return(
        <div className="nav-bar">
        <h1 className="app-name">
            <Link onClick={props.isSideBarOpen}  to={`/`}>
                BareSKN
            </Link>
        </h1>
        <div className="navbar-right">
            <span onClick={()=>{props.toogleSearchTab(); props.isSideBarOpen();}}>
                <img src={require("../icons/search.png")} alt="Search" srcSet="" className="navbar-icon"/>
            </span>
            <span className="cart-icon-container" aria-label="cart">
               <Link onClick={props.isSideBarOpen} to={`/cart`}>
                    <img id= "cart" src={require("../icons/shopping-cart.png")} alt="cart" className="navbar-icon" srcSet=""/>
                    <span id="cart-no">100</span>
                </Link>
            </span>
            <span className="cart-icon-container hidden" aria-label="profile">
                <img id= "profile" src={require("../icons/profile.png")} alt="profile" className="navbar-icon"/>
            </span>
            
            {/* {props.isSideBarOpen ?
                <div className="navbar-icon" onClick={props.toogleSideBar}>
                    <div className="navbar-line-1" style={{animationName:'navbarline1_open'}}></div>
                    <div className="navbar-line-2" style={{display:'none'}}></div>
                    <div className="navbar-line-3" style={{animationName:'navbarline3_open'}}></div>
                </div>
                :
                <div className="navbar-icon" onClick={props.toogleSideBar}>
                    <div className="navbar-line-1"  style={{animationName:'navbarline1_open', animationDirection:'reverse'}}></div>
                    <div className="navbar-line-2"></div>
                    <div className="navbar-line-3" ></div>
                </div>
            } */}
            <div className="navbar-icon" onClick={() => {props.toogleSideBar(); toogleHamburgerIcon();}}>
                    <div className="navbar-line-1" ref={bar1}></div>
                    <div className="navbar-line-2" ref={bar2}></div>
                    <div className="navbar-line-3" ref={bar3}></div>
                </div>
        </div>
        
        </div>
    )
}

export default LandingNavigationBar;