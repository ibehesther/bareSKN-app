import { useState, Component } from "react";
import {Link } from 'react-router-dom';

function CardDetails(props) {
    const [expiryDate, setExpiryDate] = useState();
    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        switch(name){
            case("card-exp-start"):
                if(value.length === 2){

                }
        }
        props.saveCardDetails(name, value);
    }
    return(
        <form className="credit-card-form">
            <div>
                <label htmlFor="card-no">
                    Card number
                </label>
                <input type="number" name="card-no" id="" 
                    placeholder="**** **** **** ****" onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="card-exp-start">
                    Expiration date
                </label>
                <div className="card-exp-date">
                    <input type="number" name="card-exp-start" id="" value={expiryDate} minLength={2} maxLength={2}
                        placeholder="MM" onChange={(e) => {
                            handleChange(e);
                        }}/>
                    <span >/</span>
                    <input type="number" name="card-exp-end" id="" value={expiryDate} minLength={4} maxLength={4}
                        placeholder="YYYY" onChange={(e) => {
                            handleChange(e);
                        }}/>
                </div>
            </div>
            <div>
                <label htmlFor="card-cvv">
                    Security code
                </label>
                <input type="number" name="card-cvv" id="" minLength={3} maxLength={3}
                    placeholder="CVV" onChange={(e) => handleChange(e)}/>
            </div>
        </form>
    )
}

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
            this.setState({creditCard:false})
        }
        if (!this.state.payOnDelivery){
            document.querySelector('#delivery').className = "payment-section"
            document.querySelector(".card-container").className = 'hidden'
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

    saveCardDetails = (name, value) => {
        this.setState({[name]: value})
        console.log(this.state)
    }

    checkCardDetails = () => {

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
                <div  >
                    <div className="payment-section" id="card">
                        <span>
                            <input type="radio" name="payment_option" checked={this.state.creditCard}  onChange={this.selectCreditCardOption}/>
                        </span>
                        <span>
                            Credit card
                        </span>
                        <span className="payment-icon-container right">
                            <img  className= 'payment-icon'src={require('../icons/mastercard.png')} alt="" />
                            <img  className= 'payment-icon'src={require('../icons/visa.png')} alt="" />
                        </span>
                    </div>
                    {this.state.creditCard && <CardDetails saveCardDetails={this.saveCardDetails}/> }
                </div>
                <Link to={`/checkout`}>
                    <button disabled={!this.state.payOnDelivery && !this.state.creditCard ? true : false} >
                        Confirm and continue
                    </button>
                </Link>
            </div>
        )
    }
}
export default Payment