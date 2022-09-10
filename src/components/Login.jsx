import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login, getUser, getGuest } from "../redux/features/user/userSlice";
import { createCart } from "../redux/features/cart/cartSlice";
import { useEffect } from "react";

function Login(props){
    const dispatch = useDispatch();
    const { id, email, password } = useSelector((store) => store.user)
    useEffect(() => {
        dispatch(getUser({email, password}));
        // dispatch(createCart(id));
    }, [password])
    return(
        <div className="login-container">
            <span className="login-title">Login</span>
            <form  onSubmit={(e) =>{return dispatch(login({e}))}} >
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
            <button onClick={() => dispatch(getGuest())} className="secondary-btn">
                GUEST LOGIN
            </button>

        </div>
    );
   
}

export default Login;