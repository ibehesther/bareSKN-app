

function SideBarProductsOptions(props) {
    const productOptions = [
        {option: "BY BRAND", suboption: []},
        {option: "BY CONCERN", suboption: []},
        {option: "BY SKIN TYPE", suboption: []}
    ]
    return(
        <ul className="sidebar-products-option" >
            {productOptions.map((option, index) => 
                <li className="sub-products" key={index}>
                    <span className="sidebar-products-title">{option.option}</span>
                </li>
            )}
        </ul>
    );
}

export default SideBarProductsOptions;