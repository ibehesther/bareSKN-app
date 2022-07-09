import { Component} from "react";

function Card() {
    return(
        <form className="credit-card-form">
            <div>
                <label htmlFor="card-no">
                    Card number
                </label>
                <input type="number" name="card-no" id="" 
                    placeholder="**** **** **** ****"/>
            </div>
            <div>
                <label htmlFor="card-exp-date">
                    Expiration date
                </label>
                <input type="number" name="card-exp-date" id="" 
                    placeholder="MM/YY"/>
            </div>
            <div>
                <label htmlFor="card-sec-code">
                    Security code
                </label>
                <input type="number" name="card-sec-code" id="" 
                    placeholder="CVV"/>
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
        this.selectPayOnDeliveryOption = this.selectPayOnDeliveryOption.bind(this)
        // this.selectCreditCardOption = this.selectCreditCardOption.bind(this)
    }
    selectPayOnDeliveryOption =() =>{
        this.setState((state) => ({payOnDelivery:!state.payOnDelivery}))
        if (!this.state.payOnDelivery){
            document.querySelector('#delivery').className = "payment-section"
            document.querySelector("#card").className = 'hidden'
        }else{
            document.querySelector("#delivery").className = 'payment-section'
            document.querySelector("#card").className = 'payment-section'
        }
        
    }
    selectCreditCardOption = () =>{
        this.setState((state) => ({creditCard:!state.creditCard}))
        if (!this.state.creditCard){
            document.querySelector('#card').className = "payment-section"
            document.querySelector("#delivery").className = 'hidden'
        }else{
            document.querySelector("#delivery").className = 'payment-section'
            document.querySelector("#card").className = 'payment-section'
        }

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
                        <input type="radio" name="payment_option" checked={this.state.payOnDelivery} onClick={this.selectPayOnDeliveryOption} />
                    </span>
                    <span>
                        Pay on delivery
                    </span>
                </div>
                <div  >
                    <div className="payment-section" id="card">
                        <span>
                            <input type="radio" name="payment_option" checked={this.state.creditCard}  onClick={this.selectCreditCardOption}/>
                        </span>
                        <span>
                            Credit card
                        </span>
                        <span className="payment-icon-container right">
                            <img  className= 'payment-icon'src={require('../icons/mastercard.png')} alt="" />
                            <img  className= 'payment-icon'src={require('../icons/visa.png')} alt="" />
                        </span>
                    </div>
                    {this.state.creditCard?  <Card/> : <div></div>}
                </div>
                <button disabled>Confirm and continue</button>
            </div>
        )
    }
}
export default Payment