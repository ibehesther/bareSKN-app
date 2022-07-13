import { Component } from "react";

class Account extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="account-container">
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
                        <p>123 Atlantic City, New Jersey.</p>
                    </div>
                    <span>Order History</span>

                </section>
                

            </div>
        )
    }
}

export default Account