import { Component } from "react";
import { useSelector } from "react-redux";
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

function Cart (props){
    const {cartItems} = useSelector((store) => store.cart)
    console.log(cartItems);
    return(
        <div className="cart-container">
            <div className="cart-items">
                {cartItems.length ? 
                cartItems.map((items) => {
                    <CartItem key={items._id}/>
                })
                : 
                <div style={{margin: "1em auto", textAlign: "center"}}> Cart is empty! </div>}
            </div>
            {cartItems.length ?
            <>
                <hr />
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
                    <Link to={`/payment`}>
                        <button>Proceed to Payment &gt; &gt; </button>
                    </Link>
                </div> 
            </> : <></>
            }
        </div>
    )

}
export default Cart;