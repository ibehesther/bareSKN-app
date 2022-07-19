import { Component } from "react";
import {Link} from "react-router-dom"

class Account extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="account-container">
                <Link to={'/edit'}>
                    <img className='navbar-icon' src={require("../icons/edit.png")}/>
                </Link>
                <section className="account-heading">
                    <h2> HI JOHN</h2>
                    <p>Not you? <a href="">Logout</a></p>
                </section>
                <section className="account-details">
                    <div>
                        <p>Name</p>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>johndoe@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>+234 904 4567 321</p>
                    </div>
                    <div>
                        <p>Address</p>
                        <p>123 Atlantic City, New Jersey, Nigeria.</p>
                    </div>
                    
                    <Link to={'/order-history'}>
                        See order history &gt; &gt; &gt;
                    </Link>
                    

                </section>
                

            </div>
        )
    }
}

export default Account