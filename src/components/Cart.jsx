import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getCart, removeFromCart, increase, decrease} from "../redux/features/cart/cartSlice";
function CartItem(props) {
    const {dispatch, _id, name,  price, quantity, image_link} = props;
    
   

    return(
        <div className="cart-item-container">
            <img src={image_link} alt={name} srcSet="" />
            <div className="cart-item-name">
                <p >{name}</p>
                <div className="item-price">${price * quantity}</div>
            </div>
            <div className="cart-item-price">
                
                <button className="quantity-no"
                onClick={() => dispatch(decrease({_id, price}))}>
                    &minus;
                </button>
                <input type="number" name="quantity" id="" placeholder="1" value={quantity} readOnly/>
                <button className="quantity-no"
                onClick={() => dispatch(increase({_id, price}))}>
                    +
                </button>
                <div className="delete-item-icon">
                    <button onClick={() => dispatch(removeFromCart({_id, price, quantity}))}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

function Cart (){
    const  {cartItems, amount } = useSelector((store) => store.cart)
    const { id } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    useEffect(() =>  {
        dispatch(getCart(id));
    }, [id]);
    return(
        <div className="cart-container">
            <div className="cart-items">
                {cartItems && cartItems.length ? 
                cartItems.map((item) => 
                    <CartItem 
                    key={item._id} 
                    _id = {item._id}
                    name ={item.name}
                    quantity= {item.quantity} 
                    price={item.price}
                    image_link={item.image_link}
                    dispatch={dispatch}/>
                )
                : 
                <div style={{margin: "1em auto", textAlign: "center"}}> Cart is empty! </div>}
            </div>
            {cartItems  && cartItems.length?
            <>
                <div className="cart-total">
                    <div className="cart-total-details">
                        <p>Shipping fee: </p>
                        <p className="total">Total :</p>
                    </div>
                    <div className="cart-total-price">
                        <p>$10.00</p>
                        <p className="total">${amount + 10} </p>
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