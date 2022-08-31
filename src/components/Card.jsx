import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart} from "../redux/features/cart/cartSlice";

function Card(props) {
    const dispatch = useDispatch()
    const {_id, name, image_link, price, description, group_name} = props
    return(
        <div className="card-container">
            <Link to={`/products/${_id}`}
            state={{ name, image_link, price, description, group_name}}>
                <img src={image_link} alt={name} className="card-img" />
            </Link>
            <section className="card-details">
                <span className="card-title">{name}</span>
                {props.rating && <span className="card-rating">&#9733;&#9733;&#9733;&#9733;</span>}
                <span className="card-price"> ${price}</span>
                <button className="card-add-btn secondary-btn"
                onClick={() => dispatch(addToCart({_id, name, image_link, price}))}>Add to Cart</button>
            </section>
        </div>
    )
}

export default Card;