import {Component} from "react";

class SignUp extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return(
            <div className="signup-container">
                {/* <span className="signup-title">Sign Up</span> */}
                <form action="">
                    <fieldset>
                        <div className="signup-section">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" />
                        </div>
                        <div className="signup-section">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                        <div className="signup-section">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="signup-section">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="signup-section">
                            <label htmlFor="address">Residential Address</label>
                            <input type="text" name="address" id="address" />
                        </div>
                        <div className="signup-section">
                            <label htmlFor="phoneNumber">Phone No.</label>
                            <input type="tel" name="phoneNumber" id="phoneNumber" />
                        </div>
                        <div className="signup-section">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                            <img className='navbar-icon visible' src={require('../icons/visibility.png')} alt="" />
                        </div>
                        <div className="signup-section">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" />
                        <img className='navbar-icon visible' src={require('../icons/visibility.png')} alt="" />
                        </div>
                       <button type="submit">SIGN UP</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SignUp;