import { Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return(
            <div className="login-container">
                <span className="login-title">Login</span>
                <form action="">
                    <fieldset>
                        <div className="login-section">
                            <label htmlFor="loginEmail">Email</label>
                            <input type="email" name="loginEmail" id="loginEmail" />
                        </div>
                        <div className="login-section">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" name="loginPassword" id="loginPassword" />
                            <img className='navbar-icon visible' src={require('../icons/visibility.png')} alt="" />
                        </div>
                        <button type="submit">LOGIN</button>
                    </fieldset>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        );
    }
}

export default Login;