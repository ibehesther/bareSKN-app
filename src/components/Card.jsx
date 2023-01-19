import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart} from "../redux/features/cart/cartSlice";

function Card(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useSelector((store) => store.user);
    const {_id, name, image_link, price, description, group_name, rating} = props;
    // console.log(id);
    const getRating = (number) => {
        return [...Array(number).keys()].map(key => <span key = {key}>&#9733;</span>);
    }
    return(
        <div className="card-container">
            <Link to={`/products/${_id}`}
            state={{ name, image_link, price, description, group_name}}>
                <img src={image_link} alt={name} className="card-img" />
            </Link>
            <section className="card-details">
                <span className="card-title">{name}</span>
                {props.rating && <span className="card-rating">{getRating(rating)}</span>}
                <span className="card-price"> ${price}</span>
                <button className="card-add-btn secondary-btn"
                    onClick={() => {
                        id && dispatch(addToCart({_id, name, image_link, price}));
                        !id && navigate("/signin");
                        }}>
                    Add to Cart
                </button>
            </section>
        </div>
    )
}

export default Card;