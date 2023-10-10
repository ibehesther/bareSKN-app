import { Component  } from "react";
import {Link } from 'react-router-dom';

class Payment extends Component{
    constructor(props){
        super(props)
        this.state = {
            payOnDelivery : false,
            creditCard : false

        }
    }

    selectPayOnDeliveryOption = () =>{
        this.setState((state) => ({payOnDelivery:!state.payOnDelivery}))
        if(this.selectCreditCardOption){
            this.setState({cardType : "None"})
            this.setState({creditCard:false})
        }
        if (!this.state.payOnDelivery){
            document.querySelector('#delivery').className = "payment-section"
            if ( document.querySelector(".card-container")){
                document.querySelector(".card-container").className = 'hidden'
            }
        }else{
            document.querySelector("#delivery").className = 'payment-section'
            document.querySelector("#card").className = 'payment-section'
        }
    }
    selectCreditCardOption = () =>{
        this.setState((state) => ({creditCard:!state.creditCard}))
        if(this.selectPayOnDeliveryOption){
            this.setState({payOnDelivery:false})
        }
        if (!this.state.creditCard){
            document.querySelector('#card').className = "payment-section"
        }else{
            document.querySelector("#delivery").className = 'payment-section'
            document.querySelector("#card").className = 'payment-section'
        }
    }

    paymentMethod = () => {
        return this.state.payOnDelivery ? "Pay on Delivery" : "Pay with Paystack"
    }
    render(){
        return(
            <div className="payment-container ">
                <h3>Choose a payment method</h3>
                    <p>
                        You will not be charged until you review this order on the next page
                    </p>
                <div className="payment-section" id="delivery">
                    <span>
                        <input type="radio" name="payment_option" checked={this.state.payOnDelivery} onChange={this.selectPayOnDeliveryOption} />
                    </span>
                    <span>
                        Pay on delivery
                    </span>
                </div>
                <div className="payment-section" id="card">
                    <span>
                        <input type="radio" name="payment_option" checked={this.state.creditCard} onChange={this.selectCreditCardOption} />
                    </span>
                    <span>
                        Pay with Paystack
                    </span>
                </div>
                {/* <div  >
                    <div className="payment-section" id="card">
                        <span>
                            <input type="radio" name="payment_option" checked={this.state.creditCard}  onChange={this.selectCreditCardOption}/>
                        </span>
                        <span>
                            Credit card
                        </span>
                        <span className="payment-icon-container right">
                            {this.state.cardType === "MasterCard" && <img  className= 'payment-icon'src={require('../icons/mastercard.png')} alt="" />}
                            {this.state.cardType === "Visa" && <img  className= 'payment-icon'src={require('../icons/visa.png')} alt="" />}
                        </span>
                    </div>
                    {this.state.creditCard && <CardDetails saveCardDetails={this.saveCardDetails} saveCardType={this.saveCardType}/> }
                </div> */}
                <Link  to={`/checkout`}
                    state={this.paymentMethod()}
                    >
                    <button disabled={!this.state.payOnDelivery && !this.state.creditCard? true : false}>
                        Confirm and continue
                    </button>
                </Link>
            </div>
        )
    }
}
export default Payment