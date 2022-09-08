import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from '../redux/features/user/userSlice';

function Account(props){
    const dispatch = useDispatch();
    const { id, first_name, last_name, email, phone_number, address, password} = useSelector(store => store.user);
    useEffect(() => {
        dispatch(getUser({email, password}));
    }, [id])
    return(
        <div className="account-container">
            <Link to={'/edit'}>
                <img className='navbar-icon' src={require("../icons/edit.png")}/>
            </Link>
            <section className="account-heading">
                <h2> HI {first_name}</h2>
                <p>Not you? <a href="">Logout</a></p>
            </section>
            <section className="account-details">
                <div>
                    <p>Name</p>
                    <p>{first_name} {last_name}</p>
                </div>
                <div>
                    <p>Email</p>
                    <p>{email}</p>
                </div>
                <div>
                    <p>Phone Number</p>
                    <p>{phone_number}</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>{address}</p>
                </div>
                
                <Link to={'/order-history'} >
                    See order history &gt; &gt; &gt;
                </Link>
                

            </section>
            

        </div>
    )
    
}

export default Account