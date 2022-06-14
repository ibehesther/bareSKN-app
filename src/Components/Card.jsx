function Card() {
    return(
        // <div className="card-container">
        //     <img src="" alt="" className="card-img" />
        //     <details className="card-details">
        //         <h2 className="card-title"></h2>
        //         <h5 className="card-subtitle"></h5>
        //         <summary className="card-summary"></summary>
        //     </details>
        // </div>

        <div className="card-container">
            <img src={require("../images/cerave.png")} alt="product" className="card-img" />
            <section className="card-details">
                <span className="card-title">Cerave Foaming Cleanser-236ml(8oz) - UK Version</span>
                <span className="card-price"> &#8358;6500</span>
                <button className="card-add-btn">Add to Cart</button>
            </section>
        </div>
    )
}

export default Card;