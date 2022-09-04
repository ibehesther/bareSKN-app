import { useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import SideBarOptions from "./SideBarOptions";

function SideBar(props){
    const { id } = useSelector((store) => store.user)
    const sidebar = useRef();
    useEffect(() => {
        const sidebar_style= sidebar.current.style;
        if(props.isSideBarOpen){
            sidebar_style.width = "100vw";
            sidebar_style.opacity = "1";
        } else{
            sidebar_style.width = "0";
            sidebar_style.opacity = "0";
        }
    })
    return(
        <aside className="sidebar-section" ref={sidebar}>
            <div className="sidebar-main-options">
                {
                    id ? 
                    <Link onClick={props.toogleSideBar} to={`/account`} >
                        <div className="sidebar-profile" >
                            <img id= "profile" src={"../icons/profile.png"} alt="profile" className="navbar-icon"/>
                            <div>
                                <p className="username">John Doe</p>
                                <p className="user-email">johndoe1@example.com</p>
                            </div>
                        </div>
                    </Link> 
                    :
                    <div className="account-section options" >
                        <Link onClick={props.toogleSideBar} to={`/signup`}>
                            <button className="signup">SIGN UP</button>
                        </Link>
                        <p className="login">
                            Already have an account? <Link onClick={props.toogleSideBar} to={`/login`}>Login</Link>
                        </p>
                    </div>
                }
                <SideBarOptions toogleSideBar={props.toogleSideBar} isSideBarOpen = {props.isSideBarOpen}/>
                <div className="sidebar-socials">
                    <a href="https://www.google.com" target='_blank' className="fa fa-google"></a>
                    <a href="https://www.facebook.com" target='_blank' className="fa fa-facebook"></a>
                    <a href="https://www.twitter.com" target='_blank' className="fa fa-twitter"></a>
                    <a href="https://www.instagram.com" target='_blank' className="fa fa-instagram"></a>
                </div>
            </div>
        </aside>
    )
}

export default SideBar;