import { Link } from 'react-router-dom';
import SideBarOptions from './SideBarOptions';
import {useSelector} from "react-redux";

function LandingNavigationBar(props) {
    // Get state properties from redux store
    const { id } = useSelector((store) => store.user)
    const { total } = useSelector((store) => store.cart)
    
    return(
        <div className="nav-bar">
            <h1 className="app-name">
                <a href='/bareSKN-app/'>BareSKN</a>
            </h1>
            <div className="navbar-center hidden-sm hidden-md">
                <SideBarOptions/>
            </div>
            <div className="navbar-right">
                <span onClick={()=>{props.toogleSearchTab(); props.isSideBarOpen && props.toogleSideBar();}}>
                    <img src={require("../icons/search.png")} alt="Search" srcSet="" className="navbar-icon"/>
                </span>
                <span className="cart-icon-container hidden-sm" aria-label="profile">
                    <Link to ={ id ? '/account' : '/login'} onClick={props.isSideBarOpen && props.toogleSideBar}>
                    <img id= "profile" src={require("../icons/profile.png")} alt="profile" className="navbar-icon"/>
                    </Link>
                </span>
                <span className="cart-icon-container" aria-label="cart">
                <Link onClick={props.isSideBarOpen && props.toogleSideBar} to={`/cart`}>
                        <img id= "cart" src={require("../icons/shopping-cart.png")} alt="cart" className="navbar-icon" srcSet=""/>
                        {total > 0 && <span id="cart-no">{total}</span>}
                    </Link>
                </span>
                {props.isSideBarOpen ?
                    <div className="navbar-icon hidden-lg" onClick={props.toogleSideBar}>
                        <div className="navbar-line-1" style={{animationName:'navbarline1_open'}}></div>
                        <div className="navbar-line-2" style={{display:'none'}}></div>
                        <div className="navbar-line-3" style={{animationName:'navbarline3_open'}}></div>
                    </div>
                    :
                    <div className="navbar-icon hidden-lg" onClick={props.toogleSideBar}>
                        <div className="navbar-line-1" ></div>
                        <div className="navbar-line-2"></div>
                        <div className="navbar-line-3"></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default LandingNavigationBar;