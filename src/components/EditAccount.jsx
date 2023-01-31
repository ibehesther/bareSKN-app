import { Component } from "react";
import { Link } from "react-router-dom";

class EditAccount extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="edit-account-container">
                <h1>Edit</h1>
                <form action="">
                    <fieldset>
                        <div className="edit-account-section">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" />
                        </div>
                        <div className="edit-account-section">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                        <div className="edit-account-section">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="edit-account-section">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="edit-account-section">
                            <label htmlFor="address">Residential Address</label>
                            <input type="text" name="address" id="address" />
                        </div>
                        <div className="edit-account-section">
                            <label htmlFor="phoneNumber">Phone No.</label>
                            <input type="tel" name="phoneNumber" id="phoneNumber" />
                        </div>
                        <Link  to={'/account'}>
                            <button type="submit" >Save</button>
                        </Link>
                        
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default EditAccount;