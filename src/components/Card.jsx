import { Link } from "react-router-dom";

function Card(props) {
    const {_id, name, image_link, price, description, group_name} = props
    return(
        <div className="card-container">
            <Link to={`/products/${_id}`}
            state={{name, image_link, price, description, group_name}}>
                <img src={image_link} alt={name} className="card-img" />
            </Link>
            <section className="card-details">
                <span className="card-title">{name}</span>
                {props.rating && <span className="card-rating">&#9733;&#9733;&#9733;&#9733;</span>}
                <span className="card-price"> ${price}</span>
                <button className="card-add-btn secondary-btn">Add to Cart</button>
            </section>
        </div>
    )
}

export default Card;