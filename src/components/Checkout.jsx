import { Component } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

const Checkout = (props) =>{
    const location = useLocation();
    const { card_no, card_exp_start, card_exp_end, cardType } = location.state;
    const { amount } = useSelector((store) => store.cart);
    const { first_name, last_name, address } = useSelector((store) => store.user);
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
                    <div className="checkout-section-payment ">
                        {cardType !== "None" &&
                        <>
                            <span >
                                **** {card_no.slice(-4)} 
                            </span>
                            <span className="payment-icon-container">
                                {cardType == "MasterCard" && <img  className= 'payment-icon'src={require('../icons/mastercard.png')} alt="" />}
                                {cardType == "Visa" && <img  className= 'payment-icon'src={require('../icons/visa.png')} alt="" />}
                            </span>
                            <span >
                                {card_exp_start}/{card_exp_end}
                            </span>
                        </> 
                        }
                        {cardType === "None" &&
                            <div className="payment-icon-container">
                                Payment on Delivery
                            </div>
                        }
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
            <Link to="/success">
                <button>Submit order</button>
            </Link>
        </div>
    )
}

export default Checkout