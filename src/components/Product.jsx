import {useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart} from "../redux/features/cart/cartSlice";
import { Breadcrumb } from "./Breadcrumb";



function Product(){
    const [show_more, setShowMore] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const desc = useRef();
    const read_more = useRef();
    const location = useLocation();
    const { id } = useSelector((store) => store.user);
    const {_id, name, image_link, price, description, group_name} = location.state;

    const showMore= () => {
        setShowMore((prev) => !prev);

        if (show_more) {
            desc.current.style.overflow = 'visible'
            desc.current.style.height = 'fit-content'
            read_more.current.textContent = "Read less"
        }else {
            desc.current.style.overflow = 'hidden'
            desc.current.style.height = '5em'
            read_more.current.textContent = "Read more"
        }
    }
   
    return(
        <div className="product-container">
            {group_name && <Breadcrumb group_name = {group_name}  name={name}/>}
            <div className="product-img-container">
                <img src={image_link} alt={name} className="product-img"  />
            </div>
            <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="product-price">${price}</p>
                <p className="product-desc" ref={desc}>
                {description}
                </p>
                <p className="more" ref={read_more} onClick={showMore}>Read more</p>
            </div>
            <div className="product-cart-details">
                <div className="product-quantity">
                    <label htmlFor="quantity">Quantity</label>
                    {/* <button className="quantity-no">&minus;</button> */}
                    <input type="number" name="quantity" id="" placeholder="1"/>
                    {/* <button className="quantity-no">+</button> */}
                </div>
                <div className="product-cart-btn">
                    <button className="secondary-btn"
                    onClick={() => {
                        id && dispatch(addToCart({_id, name, image_link, price}));
                        !id && navigate("/login");
                        }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


export default Product;