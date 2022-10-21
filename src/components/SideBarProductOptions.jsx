import { useState, useEffect } from "react";
import { SubDropDown } from "./DropDown";
import { Link } from "react-router-dom";

function SideBarProductsOptions(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const subCategoryProducts = ['br', 'con', 'skn'];

    const [subCategoryDropDown1, setSubCategoryDropDown1] = useState(false);
    const [subCategoryDropDown2, setSubCategoryDropDown2] = useState(false);
    const [subCategoryDropDown3, setSubCategoryDropDown3] = useState(false);
    const [subCategoryIndex, setSubCategoryIndex] = useState(1);
    const subCategoryDropDownList=[
        subCategoryDropDown1, subCategoryDropDown2, subCategoryDropDown3
    ]
    const setSubCategoryDropDownList=[
        setSubCategoryDropDown1, setSubCategoryDropDown2, setSubCategoryDropDown3
    ];
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/categories`)
        .then((res) => res.json())
        .then((categories) => {
            setCategories(categories);
            setIsLoading(false);
        }).catch(() => setIsLoading(true));
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/subcategories/cat_0${encodeURIComponent(subCategoryIndex)}`)
        .then((res) => res.json())
        .then(({subCategories}) => {
            setSubCategories(subCategories);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, [subCategoryIndex]);

    return(
        <ul className={`sidebar-products-option ${props.show && "sidebar-show"}`} >
            { isLoading ? 
            <div className="sub-products"> Loading... </div>
            :
            categories.map(({name, key}, index) => 
            <div key={key}>
                <li className="sub-products" >
                    <span className="sidebar-products-title">By {name}</span>
                    <SubDropDown index={index} 
                    subCategoryDropDownList={subCategoryDropDownList}
                    setSubCategoryDropDownList={setSubCategoryDropDownList}
                    subCategoryDropDown={subCategoryDropDownList[index]} 
                    setSubCategoryDropDown={setSubCategoryDropDownList[index]}
                    setSubCategoryIndex={setSubCategoryIndex}/>
                </li>
                <ul className={`sidebar-products-option ${subCategoryDropDownList[index] && "sidebar-show"}`} >
                    {subCategories.map(({name, key}, sub_index) => 
                        <li className="sub-products" key={key}>
                            <Link  
                            // onClick={() => toogleAll()} 
                            onClick={props.toogleSideBar}
                            to={`subcategories/subcat_${encodeURIComponent(subCategoryProducts[index])}_0${encodeURIComponent(sub_index +1)}/products`}
                            state={{key, 
                            index: sub_index + 1,
                            subCategoryProducts:subCategoryProducts[index]}}
                            >
                                <span className="sidebar-products-title" style={{padding: "0 1em"}}>
                                    {name}
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            )}
        </ul>
    );
}

export default SideBarProductsOptions;