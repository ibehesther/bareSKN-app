

function SideBarProductsOptions(props) {
    const productOptions = [
        {option: "BY BRAND", suboption: ["a", "b", "c"]},
        {option: "BY CONCERN", suboption: ["d", "e", "f"]},
        {option: "BY SKIN TYPE", suboption: ["g", "h", "i"]}
    ]
    
    return(
        <ul className="sidebar-products-option" >
            {productOptions.map((option, index) => 
                <li className="sub-products" key={index}>
                    <span className="sidebar-products-title">{option.option}</span>
                    <div className="sidebar-show-more-icon" >
                        <div className="sidebar-show-more-line-1" ></div>
                        <div className="sidebar-show-more-line-2"></div>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default SideBarProductsOptions;