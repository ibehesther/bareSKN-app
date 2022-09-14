import { useState } from 'react';
import {Link} from 'react-router-dom'

function SignUp(props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


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
            case("address"):
                setAddress(e.target.value);
                break;
            case("phoneNumber"):
                setPhoneNo(e.target.value);
                break;
            case("password"):
                setPassword(e.target.value);
                break;
            case("confirmPassword"):
                setConfirmPassword(e.target.value);
                break;
        }
    }

    return(
        <div className="signup-container">
            <span className="signup-title">Sign Up</span>
            <form action="">
                <fieldset>
                    <div className="signup-section">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" 
                        onChange={(e) => handleChange(e)} value={firstName}/>
                    </div>
                    <div className="signup-section">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" 
                        onChange={(e) => handleChange(e)} value={lastName}/>
                    </div>
                    <div className="signup-section">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" 
                        onChange={(e) => handleChange(e)} value={email}/>
                    </div>
                    <div className="signup-section">
                        <label htmlFor="address">Residential Address</label>
                        <input type="text" name="address" id="address" 
                        onChange={(e) => handleChange(e)} value={address}/>
                    </div>
                    <div className="signup-section">
                        <label htmlFor="phoneNumber">Phone No.</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" 
                        onChange={(e) => handleChange(e)} value={phoneNo}/>
                    </div>
                    <div className="signup-section">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" 
                        onChange={(e) => handleChange(e)} value={password}/>
                    </div>
                    <div className="signup-section">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" 
                    onChange={(e) => handleChange(e)} value={confirmPassword}/>
                    </div>
                    <button type="submit">SIGN UP</button>
                </fieldset>
            </form>
            <p >Already have an account? <Link to={`/login`}>Login</Link></p>
        </div>
    );
}

export default SignUp;