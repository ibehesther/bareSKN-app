import {Component} from "react";
import SideBarOptions from "./SideBarOptions"

class SideBar extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <aside className="sidebar-section">
                <div className="sidebar-main-options">
                    <div className="account-section options">
                        <button className="signup">SIGN UP</button>
                        <p className="login">
                            Already have an account? <a href="./">Login</a>
                        </p>
                    </div>
                    <div className="sidebar-profile">
                        <img id= "profile" src={require("../icons/profile.png")} alt="profile" className="navbar-icon"/>
                        <div>
                            <p className="username">John Doe</p>
                            <p className="user-email">johndoe1@example.com</p>
                        </div>
                    </div>
                    <SideBarOptions/>
                </div>
            </aside>
        )
    }
}

export default SideBar;