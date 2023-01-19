import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchTab(props){
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    
    const handleChange =(e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/products?s=${encodeURIComponent(searchTerm)}&limit=5`)
        .then((res) => res.json())
        .then(({products}) => {
            setProducts(products);
        }).catch(console.log)
    }, [searchTerm]);
    
    return(
        <div className="navbar-search-tab-container">
            <div className="navbar-search-tab">
                <form action="/" className="search-tab" onSubmit={(e) => { e.preventDefault(); return false}}>
                    <input type="text" name="Search" value={searchTerm}
                     id="search-tab" className="search-tab" 
                     placeholder="Search" onChange={(e) => handleChange(e)}/>
                </form>
                <button id="cancel" onClick={props.toogleSearchTab}>CANCEL</button>
            </div>
            <div className="navbar-search-result">
                <ul> 
                   { (searchTerm.length > 1 && products.length == 0) ?
                   <li>No products found...</li>:
                   products.map(({_id, name, image_link, price, description}, index) => 
                        <li key={index}>
                            <Link onClick={props.toogleSearchTab} to={`/products/${_id}`} 
                            state={{ name, image_link, price, description}}>
                            {name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SearchTab;