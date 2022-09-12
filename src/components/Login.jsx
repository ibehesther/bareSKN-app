import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login, getUser, getGuest } from "../redux/features/user/userSlice";
import { createCart } from "../redux/features/cart/cartSlice";
import { useEffect, useState } from "react";

function Login(props){
    const dispatch = useDispatch();
    const [inputEmailSelected, setInputEmailSelected] = useState(false);
    const [inputPasswordSelected, setInputPasswordSelected] = useState(false);
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const { id, type, email, password, error } = useSelector((store) => store.user);
    const handleChange = (e) => {
        switch(e.target.name){
            case("login_email"):
                setInputEmailSelected(true);
                setInputEmail(e.target.value);
                break;
            case("login_password"):
                setInputPasswordSelected(true);
                setInputPassword(e.target.value);
                break;
        }
    }
    const checkInputEntered = (e) => {
        e.preventDefault();
        let email = inputEmail.trim();
        let password = inputPassword.trim();

        if(email === ""){
            return false;
        }else{
            if (password === ""){
                setPasswordError("You need to provide your password here!")
                return false;
            }else{
                if (password.length > 0 && password.length < 8){
                    setPasswordError("Your password needs to have atleast 8 characters!");
                    return false;
                }
                // Reset input fields
                setInputEmail("");
                setInputPassword("");
                setInputEmailSelected(false);
                setInputPasswordSelected(false);

                // Attempt to get user 
                dispatch(getUser({email, password}));
                return true;
            }
        }
    }

    useEffect(() => {
        if (type == "guest"){
            dispatch(createCart(id));
        }
    }, [id]);


    return(
        <div className="login-container">
            <span className="login-title">Login</span>
            <form  onSubmit={(e) =>{
                const correctInput = checkInputEntered(e);
                if(correctInput){  
                    dispatch(login({e}));
                }
                }} >
                <fieldset>
                    <div className="login-section">
                        <label htmlFor="login_email">Email <span className="required">*</span></label>
                        <input type="email" name="login_email" id="login_email" 
                        onChange={(e) => handleChange(e)} value={inputEmail}/>
                        { inputEmailSelected && !inputEmail && <p className='error'>You need to provide your email here!</p>}
                    </div>
                    <div className="login-section">
                        <label htmlFor="login_password">Password <span className="required">*</span></label>
                        <input type="password" name="login_password" id="login_password" 
                        onChange={(e) => handleChange(e)} value={inputPassword} />
                        <img className='navbar-icon visible' src={require('../icons/visibility.png')} alt="" />
                        <p className='error'>{passwordError}</p>
                    </div>
                    {error && <p className='error'>There is a problem with your email or password, try again!</p>}
                    <button type="submit">LOGIN</button>
                </fieldset>
            </form>
            <p>Don't have an account? <Link to={`/signup`}>Sign up</Link></p>
            <p className="seperator"><span></span>or <span></span></p> 
            <button onClick={() => {
                dispatch(getGuest());
            }} className="secondary-btn">
                GUEST LOGIN
            </button>

        </div>
    );
   
}

export default Login;