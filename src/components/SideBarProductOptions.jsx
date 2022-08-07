import { useState } from "react";
import { useEffect } from "react";
import { DropDown } from "./DropDown";


function SideBarProductsOptions(props) {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/categories`)
        .then((res) => res.json())
        .then((categories) => {
            setCategories(categories)
        })
    })
    
    return(
        <ul className="sidebar-products-option" >
            {categories.map(({name, key}, index) => 
                <li className="sub-products" key={key}>
                    <span className="sidebar-products-title">By {name}</span>
                    {/* <div className="sidebar-show-more-icon" >
                        <div className="sidebar-show-more-line-1" ></div>
                        <div className="sidebar-show-more-line-2"></div>
                    </div> */}
                    <DropDown id={index}/>
                </li>
            )}
        </ul>
    );
}

export default SideBarProductsOptions;