import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from "react";



const Checkout = (props) =>{
    const location = useLocation();

    const [redirectUrl, setRedirectUrl] = useState(null);

    const paymentMethod = location.state;
    const { amount } = useSelector((store) => store.cart);
    const { first_name, last_name, address, email } = useSelector((store) => store.user);


    const payWithPaystack = async(email, amount) => {
        if(paymentMethod === "Pay with Paystack"){
            fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/paystack/pay`, {
                method: "POST", 
                body: JSON.stringify({email, amount}),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .then(({redirectUrl}) => {
                setRedirectUrl(redirectUrl)
            })
            .catch((err) => setRedirectUrl(null));
        }
    }


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
                            <Link to={"/payment"}>Edit</Link>
                        </span> 
                    </div>
                    <div className="checkout-section-payment">
                        <div className="payment-icon-container">
                            {paymentMethod}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="checkout-section heading">
                        <span className="checkout-section-title">
                            Shipping address
                        </span>
                        <span >
                            <Link to={"/account"}>Edit</Link>
                        </span>
                    </div>
                    <div className="checkout-section">
                        <span>Name</span>
                        <span>{first_name} {last_name}</span>
                    </div>
                    <div className="checkout-section">
                        <span>Street</span>
                        <span>{address}</span>
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
                        <span>${amount}</span>
                    </div>
                    <div className="checkout-section">
                        <span>Delivery</span>
                        <span>$20.00</span>
                    </div>
                    <div className="checkout-section total">
                        <span>Total</span>
                        <span>${amount + 20}</span>
                    </div>
                </section>
            </div>
            {/* <Link to="/success">
                <button>Submit order</button>
            </Link> */}
            <a href={redirectUrl}>
                <button
                 onClick={() => payWithPaystack(email, amount+20)}>
                    Submit order
                </button>
            </a>
            
        </div>
    )
}

export default Checkout