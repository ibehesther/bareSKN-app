import {Component} from "react";
import {Link} from "react-router-dom"
import SideBarOptions from "./SideBarOptions"

class SideBar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <aside className="sidebar-section">
                <div className="sidebar-main-options">
                    <div className="account-section options" >
                        <Link onClick={this.props.toogleSideBar} to={`/signup`}>
                            <button className="signup">SIGN UP</button>
                        </Link>
                        <p className="login">
                            Already have an account? <Link onClick={this.props.toogleSideBar} to={`/login`}>Login</Link>
                        </p>
                    </div>
                    <Link onClick={this.props.toogleSideBar} to={`/account`} >
                        <div className="sidebar-profile" >
                            <img id= "profile" src={require("../icons/profile.png")} alt="profile" className="navbar-icon"/>
                            <div>
                                <p className="username">John Doe</p>
                                <p className="user-email">johndoe1@example.com</p>
                            </div>
                        </div>
                    </Link>
                    
                    <SideBarOptions toogleSideBar={this.props.toogleSideBar} isSideBarOpen = {this.props.isSideBarOpen}/>
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
}

export default SideBar;