import { Component } from "react";
import {Link } from 'react-router-dom';

function CartItem() {
    return(
        <div className="cart-item-container">
            <img src={require('../images/cerave.png')} alt="" srcset="" />
            <div className="cart-item-name">
                <p >CeraVe Foaming Facial Cleanser</p>
            </div>
            <div className="cart-item-price">
                <div className="item-price">$20.00</div>
                <button className="quantity-no">&minus;</button>
                <input type="number" name="quantity" id="" placeholder="1"/>
                <button className="quantity-no">+</button>
                <div className="delete-item-icon"><button>Remove</button></div>
            </div>
        </div>
    )
}

class Cart extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cart-container">
                <div className="cart-items">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="cart-total">
                    <div className="cart-total-details">
                        <p>Shipping fee: </p>
                        <p className="total">Total :</p>
                    </div>
                    <div className="cart-total-price">
                        <p>$10.00</p>
                        <p className="total">$1000.00</p>
                    </div>
                </div>
                <div className="proceed-btn-container">
                    <Link to={`${process.env.PUBLIC_URL}/payment`}>
                        <button>Proceed to Payment &gt; &gt; </button>
                    </Link>
                </div>
                
               
            </div>
        )
    }
}
export default Cart;