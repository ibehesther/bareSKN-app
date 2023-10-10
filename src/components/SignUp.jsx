import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {createUser} from "../redux/features/user/userSlice";
import { getCart, createCart } from '../redux/features/cart/cartSlice';
import { useEffect } from 'react';

function SignUp(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector((store) => store.user);
    const { id: cart_id } = useSelector((store) => store.cart);
    // Form field values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Form field errors
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [phoneNoError, setPhoneNoError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        switch(e.target.name){
            case("firstName"):
                setFirstName(e.target.value);
                break;
            case("lastName"):
                setLastName(e.target.value);
                break;
            case("email"): 
                setEmail(e.target.value);
                break;
            case("residence"):
                setAddress(e.target.value);
                break;
            case("phoneNumber"):
                let value = e.target.value.replace(" ", '')
                setPhoneNo(value);
                break;
            case("password"):
                setPassword(e.target.value);
                break;
            case("confirmPassword"):
                setConfirmPassword(e.target.value);
                break;
            default:
                console.log("This field is not required")
        }
    }

    const validateForm = () => {
        // checks if first name is valid
        if(firstName.length >= 3){
            setFirstNameError(null);
            // checks if last name is valid
            if(lastName.length >= 3){
                setLastNameError(null);
                // checks if email is valid
                const email_regex = /^(\w+.[a-zA-Z0-9])[@][\w+-]{3,}[.][a-zA-Z]{2,3}$/i;
                if(email_regex.test(email)){
                    setEmailError(null);
                    // checks if phone number is in right format
                    const phone_regex = /^[+][0-9]{13}$/;
                    if(phone_regex.test(phoneNo)){
                        setPhoneNoError(null);
                        // checks if password is valid
                        const password_regex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
                        if(password_regex.test(password)){
                            setPasswordError(null);
                            // checks if confirmPassword matches password
                            if(confirmPassword === password){
                                setConfirmPasswordError(null);
                                return true;
                            }else{
                                setConfirmPasswordError("Password does not match!");
                                return false;
                            }
                        }else{
                            setPasswordError("Password must be atleast 8 characters long and contain atleast one uppercase letter, number and special character.");
                        }   return false;
                    }else{
                        setPhoneNoError("Phone number should follow this format `+234 567 8901 234`.");
                        return false;
                    }
                }else{
                    setEmailError("Invalid email address!");
                    return false;
                }
            }else{
                setLastNameError("Last name should contain atleast 3 characters!");
                return false;
            }
        }else{
            setFirstNameError("First name should contain atleast 3 characters!");
            return false;
        }
    }
    const handleFormSubmission = async(e) => {
        e.preventDefault();
        if(validateForm()){
            
            // Create a new user
            console.log("Submiting Form")
            const user = {
                first_name: firstName, last_name: lastName, email, address,
                phone_number: phoneNo, password
            }
            setFormSubmitted(true);
            await dispatch(createUser(user))
            .then(async ({payload}) => {
                if(payload.user){
                    dispatch(createCart(payload.user._id))
                }
            }).catch(console.log);
            
            getCart(cart_id);
            navigate('/');
        }
    }

    useEffect(() => {
        if(!error){
            // Reset all input fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("");
            setPhoneNo("");
            setPassword("");
            setConfirmPassword(""); 
        }
    }, [error]);

    useEffect(() => {
        if(formSubmitted && !error ) return 
    }, [formSubmitted, error])
    return(
        <div className="signup-page">
            <div className="side-align-img">
                <img src={require("../images/auth_image.jpg")} alt="" srcSet="" />
            </div>
            <div className="signup-container">
                <span className="signup-title">Hi, there</span>
                <form action="" onSubmit={((e) => {handleFormSubmission(e)})}>
                    <fieldset>
                        <div className="signup-section">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName"
                            placeholder='John' 
                            onChange={(e) => handleChange(e)} value={firstName}/>
                            <p className="error">{firstNameError && firstNameError}</p>
                        </div>
                        <div className="signup-section">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" 
                            placeholder='Doe'
                            onChange={(e) => handleChange(e)} value={lastName}/>
                            <p className="error">{lastNameError && lastNameError}</p>
                        </div>
                        <div className="signup-section">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" 
                            placeholder='johndoe@example.com'
                            onChange={(e) => handleChange(e)} value={email}/>
                            <p className="error">{emailError && emailError}</p>
                        </div>
                        <div className="signup-section">
                            <label htmlFor="residence">Residential Address</label>
                            <input type="text" name="residence" id="residence" 
                            placeholder='No. 4 Baker Street, Victoria Island'
                            onChange={(e) => handleChange(e)} value={address}/>
                            <p className="error"></p>
                        </div>
                        <div className="signup-section">
                            <label htmlFor="phoneNumber">Phone No.</label>
                            <input type="tel" name="phoneNumber" id="phoneNumber" 
                            placeholder='+234 567 8901 234'
                            onChange={(e) => handleChange(e)} value={phoneNo}/>
                            <p className="error">{phoneNoError && phoneNoError}</p>
                        </div>
                        <div className="signup-section">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" 
                            onChange={(e) => handleChange(e)} value={password}/>
                            <p className="error">{passwordError && passwordError}</p>
                        </div>
                        <div className="signup-section">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" 
                            onChange={(e) => handleChange(e)} value={confirmPassword}/>
                            <p className="error">{confirmPasswordError && confirmPasswordError}</p>
                        </div>
                        <p className="error">{error && "An account with this email already exists"}</p>
                        <button type="submit">SIGN UP</button>
                    </fieldset>
                </form>
                <p >Already have an account? <Link to={`/signin`}>Signin</Link></p>
            </div>
        </div>
    );
}

export default SignUp;