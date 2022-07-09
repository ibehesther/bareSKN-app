import { Component } from "react";
import Payment from "./Payment";

class Checkout extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="checkout-container">
                <h3>Please confirm and submit your order</h3>
                    <p>
                        By clicking submit order, you agree to 
                        BareSKN's <a href="">Terms and Conditions.</a>
                    </p>
                <div className="checkout-review">
                    <section>
                        <div className="checkout-section heading">
                            <span className="checkout-section-title">
                                Payment
                            </span>
                            <span >
                                <a href="">Edit</a>
                            </span> 
                        </div>
                        <div className="checkout-section-payment ">
                            <span >
                                **** 6714 
                            </span>
                            <span className="payment-icon-container">
                                <img  className= 'payment-icon'src={require('../icons/mastercard.png')} alt="" />
                                <img  className= 'payment-icon'src={require('../icons/visa.png')} alt="" />
                            </span>
                            <span >
                                01/24
                            </span> 
                        </div>
                        
                    </section>
                    <section>
                        <div className="checkout-section heading">
                            <span className="checkout-section-title">
                                Shipping address
                            </span>
                            <span >
                                <a href="">Edit</a>
                            </span>
                        </div>
                        <div className="checkout-section">
                            <span>Name</span>
                            <span>John Doe</span>
                        </div>
                        <div className="checkout-section">
                            <span>Street</span>
                            <span>43B Stanford Field Close</span>
                        </div>
                        <div className="checkout-section">
                            <span>City</span>
                            <span>Atlanta</span>
                        </div>
                    </section>
                    <section>
                        <div className="checkout-section heading">
                            <span className="checkout-section-title">
                                Order summary
                            </span>
                        </div>
                        <div className="checkout-section">
                            <span>Subtotal</span>
                            <span>$980.00</span>
                        </div>
                        <div className="checkout-section">
                            <span>Delivery</span>
                            <span>$20.00</span>
                        </div>
                        <div className="checkout-section total">
                            <span>Total</span>
                            <span>$1000.00</span>
                        </div>
                    </section>
                </div>
                <button>Submit order</button>
            </div>
        )
    }
}

export default Checkout