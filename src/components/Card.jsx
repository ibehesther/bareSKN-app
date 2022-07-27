function Card(props) {
    return(

        <div className="card-container">
            <img src="https://cdn.shopify.com/s/files/1/0513/3775/6828/products/centellacream_01_720x.jpg?v=1610006064" alt="product" className="card-img" />
            <section className="card-details">
                <span className="card-title">Cerave Foaming Cleanser-236ml(8oz) - UK Version</span>
                {props.rating?<span className="card-rating">&#9733;&#9733;&#9733;&#9733;</span> : <span></span>}
                <span className="card-price"> &#8358;6500</span>
                <button className="card-add-btn">Add to Cart</button>
            </section>
        </div>
    )
}

export default Card;