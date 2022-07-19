import {Component} from "react";
import { Link } from "react-router-dom";

function Order(){
    return(
        <div className="order-history-item-section">
            <div className="order-history-item">
                <div>
                    <span className="order-item-id">
                        Order#: {999012}
                    </span>
                    <span>20-Dec-2019. 3:00 PM</span>
                </div>
                <img src={require('../images/cerave.png')} 
                alt="product" className="order-item-image"/>
            </div>
            <p className="order-history-delivered">
                Delivered on 21 Dec
            </p>
            {/* <p className="order-history-pending">
                Estimated Delivery on 21 Dec
            </p> */}
        </div>
    );
}

class OrderHistory extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="order-history-section">
                <div>
                    <Link to={'/account'}>
                        <img src={require('../icons/back.png')}
                        alt='account' className="navbar-icon"/>
                    </Link>
                    <h1>Order history</h1>
                </div>
                
                <div className="order-history-list">
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                </div>
            </div>
        );
    }
}

export default OrderHistory;