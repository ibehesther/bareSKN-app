import { useRef, useState, Component  } from "react";
import {Link } from 'react-router-dom';

function CardDetails(props) {
    const cardNo = useRef();
    const cardExpStart = useRef();
    const cardExpEnd = useRef();
    const cardCVV = useRef();

    let [cardType, setCardType] = useState('')

    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case("card_no"):
                if(value.length === 16){
                    cardExpStart.current.focus();
                    cardNo.current.disabled = true
                }
                if(value.match(/^4/)){
                    setCardType("Visa");
                }
                else if (value.match(/^51/) || value.match(/^55/)){
                    setCardType("MasterCard");
                }
                else{
                    setCardType("")
                }
                props.saveCardType(cardType);
                break;
            case("card_exp_start"):
                if( cardNo.current.value.length < 16){
                    setCardType("");
                    props.saveCardType(cardType);
                }
                if(value.length === 2){
                    cardExpStart.current.disabled = true
                    cardExpEnd.current.focus();
                }
                break;
            case("card_exp_end"):
                if(value.length === 2){
                    cardExpEnd.current.disabled = true
                    cardCVV.current.focus()
                }
                break;
            case("card_cvv"):
                if(value.length === 3){
                    cardCVV.current.disabled = true
                }
                break;
            default:
                break
        }
        props.saveCardDetails(name, value);
    }

    const enableFields = () => {
        cardNo.current.disabled = false;
        cardExpStart.current.disabled = false;
        cardExpEnd.current.disabled = false;
        cardCVV.current.disabled = false;
    }
    return(
        <form className="">
            <button type="reset" id="card-reset" onClick={() => enableFields()}>&#8635;</button>
            <div className="credit-card-form">
            <div>
                <label htmlFor="card_no">
                    Card number
                </label>
                <input type="number" name="card_no" id="" ref={cardNo} disabled={false}
                    placeholder="**** **** **** ****" onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="card_exp_start">
                    Expiration date
                </label>
                <div className="card-exp-date">
                    <input type="number" name="card_exp_start" id=""
                        ref={cardExpStart} placeholder="MM" onChange={(e) => {
                            handleChange(e);
                        }}/>
                    <span >/</span>
                    <input type="number" name="card_exp_end" id=""
                        ref={cardExpEnd} placeholder="YY" onChange={(e) => {
                            handleChange(e);
                        }}/>
                </div>
            </div>
            <div>
                <label htmlFor="card_cvv">
                    Security code
                </label>
                <input type="number" name="card_cvv" id="" minLength={3} maxLength={3}
                    ref={cardCVV} placeholder="CVV" onChange={(e) => handleChange(e)}/>
            </div>
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
    
    cardDetails = () => {
        let { card_no, card_exp_start, card_exp_end, cardType } = this.state;
        return { card_no, card_exp_start, card_exp_end, cardType };
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

    saveCardDetails = (name, value) => {
        this.setState({[name]: value});
    }

    saveCardType = (type) => {
        this.setState({cardType: type})
    }
    
    checkCardValidity = () => {
        let { card_no, card_exp_start, card_exp_end, card_cvv, cardType} = this.state;
        if(card_no && card_exp_start && card_exp_end && card_cvv && cardType) {
            return true;
        }else{
            return false;
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
                            {this.state.cardType === "MasterCard" && <img  className= 'payment-icon'src={require('../icons/mastercard.png')} alt="" />}
                            {this.state.cardType === "Visa" && <img  className= 'payment-icon'src={require('../icons/visa.png')} alt="" />}
                        </span>
                    </div>
                    {this.state.creditCard && <CardDetails saveCardDetails={this.saveCardDetails} saveCardType={this.saveCardType}/> }
                </div>
                <Link  to={`/checkout`}
                    state={this.cardDetails()}
                    >
                    <button disabled={!this.state.payOnDelivery && !this.checkCardValidity()? true : false}>
                        Confirm and continue
                    </button>
                </Link>
            </div>
        )
    }
}
export default Payment