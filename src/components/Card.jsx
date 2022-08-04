function Card(props) {
    const {name, image_link, price} = props
    return(
        <div className="card-container">
            <img src={image_link} alt="product" className="card-img" />
            <section className="card-details">
                <span className="card-title">{name}</span>
                {props.rating?<span className="card-rating">&#9733;&#9733;&#9733;&#9733;</span> : <span></span>}
                <span className="card-price"> ${price}</span>
                <button className="card-add-btn">Add to Cart</button>
            </section>
        </div>
    )
}

export default Card;