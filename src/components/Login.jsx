import { Component } from "react";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../redux/features/user/userSlice"

function Login(props){
    const dispatch = useDispatch();

    return(
        <div className="login-container">
            <span className="login-title">Login</span>
            <form  onSubmit={(e) =>{return dispatch(login({e}))}}>
                <fieldset>
                    <div className="login-section">
                        <label htmlFor="login_email">Email</label>
                        <input type="email" name="login_email" id="login_email" />
                    </div>
                    <div className="login-section">
                        <label htmlFor="login_password">Password</label>
                        <input type="password" name="login_password" id="login_password" />
                        <img className='navbar-icon visible' src={require('../icons/visibility.png')} alt="" />
                    </div>
                    <button type="submit">LOGIN</button>
                </fieldset>
            </form>
            <p>Don't have an account? <Link to={`/signup`}>Sign up</Link></p>
            <p className="seperator"><span></span>or <span></span></p> 
            <button type="submit" className="secondary-btn">GUEST LOGIN</button>

        </div>
    );
   
}

export default Login;