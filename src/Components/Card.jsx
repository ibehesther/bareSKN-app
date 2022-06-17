function Card(props) {
    return(

        <div className="card-container">
            <img src={require("../images/cerave.png")} alt="product" className="card-img" />
            <section className="card-details">
                <span className="card-title">Cerave Foaming Cleanser-236ml(8oz) - UK Version</span>
                {props.rating?<span>&#9733;&#9733;&#9733;&#9733;</span> : <span></span>}
                <span className="card-price"> &#8358;6500</span>
                <button className="card-add-btn">Add to Cart</button>
            </section>
        </div>
    )
}

export default Card;