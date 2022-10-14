const Success = (props) => {
    return (
        <div className="success-container">
            <img src={require("../images/success.png")} alt="Big tick" />       
            <h1>Your order was submitted successfully!</h1>
        </div>
    )
}

export default Success;