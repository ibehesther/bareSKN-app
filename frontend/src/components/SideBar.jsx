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
                        <Link onClick={this.props.toogleSideBar} to={"/signup"}>
                            <button className="signup">SIGN UP</button>
                        </Link>
                        <p className="login">
                            Already have an account? <Link onClick={this.props.toogleSideBar} to="/login">Login</Link>
                        </p>
                    </div>
                    <Link onClick={this.props.toogleSideBar} to={"/account"} >
                        <div className="sidebar-profile" >
                            <img id= "profile" src={require("../icons/profile.png")} alt="profile" className="navbar-icon"/>
                            <div>
                                <p className="username">John Doe</p>
                                <p className="user-email">johndoe1@example.com</p>
                            </div>
                        </div>
                    </Link>
                    
                    <SideBarOptions toogleSideBar={this.props.toogleSideBar}/>
                </div>
            </aside>
        )
    }
}

export default SideBar;