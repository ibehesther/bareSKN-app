import { Component, createRef } from "react";

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            show_more : false
        }
        this.description = createRef();
        this.read_more = createRef();
        this.showMore = this.showMore.bind(this);
    }
    showMore= () => {
        this.setState((state) => ({
            show_more : !state.show_more
        }))

        if (this.state.show_more) {
            this.description.current.style.overflow = 'visible'
            this.description.current.style.height = 'fit-content'
            this.read_more.current.textContent = "Read less"
        }else {
            this.description.current.style.overflow = 'hidden'
            this.description.current.style.height = '4.5em'
            this.read_more.current.textContent = "Read more"
        }
    }
    render(){
        return(
            <div className="product-container">
                <div className="product-img-container">
                    <img src={require('../images/cerave.png')} alt="product" className="product-img"  />
                </div>
                <div className="product-details">
                    <p className="product-name">CeraVe Foaming Facial Cleanser</p>
                    <p className="product-price"> $20</p>
                    <p className="product-desc" ref={this.description}>
                    CeraVe Foaming Facial Cleanser features ceramides, hyaluronic acid, 
                    and niacinamide, and is formulated to help to maintain your skin’s
                    protective barrier, lock in moisture, and calm your skin. Developed 
                    with dermatologists, this non-drying face wash for normal to oily skin 
                    deeply cleanses, removes excess oil, and refreshes your skin without 
                    disrupting the skin barrier.
                    </p>
                    <p className="more" ref={this.read_more} onClick={this.showMore}>Read more</p>
                </div>
                <div className="product-cart-details">
                    <div className="product-quantity">
                        <label htmlFor="quantity">Quantity</label>
                        <button className="quantity-no">&minus;</button>
                        <input type="number" name="quantity" id="" placeholder="1"/>
                        <button className="quantity-no">+</button>
                    </div>
                    <div className="product-cart-btn">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Product;