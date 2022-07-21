import { Component, createRef } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

class AuthSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            authTitle: ''
        }
        this.signUpBtn = createRef();
        this.loginBtn = createRef();
        this.confirmAuthTitle = this.confirmAuthTitle.bind(this);
    }
    confirmAuthTitle(e) {
        const auth = e.target.innerHTML;
        this.setState({authTitle : auth});
        // e.target.className += " auth-title select-auth"
        if (auth === "Sign Up" ){
            this.signUpBtn.current.className= 'auth-title select-auth'
            this.loginBtn.current.className= ' auth-title'
        }else{
            this.loginBtn.current.className= ' auth-title select-auth'
            this.signUpBtn.current.className= 'auth-title'
        }
    }
    render() {
        return (
            <div className="auth-container">
                <div className="auth-title-section">
                    <button className="auth-title" ref = {this.signUpBtn} onClick={this.confirmAuthTitle}>Sign Up</button>
                    <button className="auth-title select-auth" ref={this.loginBtn} onClick={this.confirmAuthTitle}>Login</button>
                </div>
                <div className="auth-form">
                    {this.state.authTitle === "Sign Up" ? <SignUp/> : <Login/>}
                    {this.state.authTitle === "Sign Up" ? <p >Already have an account? <a href="">Login</a></p> : <p>Don't have an account? <a href="">Sign up</a></p>}
                </div>
            </div>
        );
    }
}

export default AuthSection;