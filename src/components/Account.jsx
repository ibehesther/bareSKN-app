import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, logout } from '../redux/features/user/userSlice';

function Account(props){
    const dispatch = useDispatch();
    const { id,type, first_name, last_name, email, phone_number, address } = useSelector(store => store.user);
    
    return(
        <div className="account-container">
            <Link to={'/edit'}>
                <img className='navbar-icon' alt="edit" src={require("../icons/edit.png")}/>
            </Link>
            <section className="account-heading">
                <h2> HI {first_name}</h2>
                <p>Not you? 
                    <Link  to="/" onClick={async() => {
                        if(type === "guest"){
                            console.log(id)
                            dispatch(deleteUser(id));
                            dispatch(logout());
                        }else{
                            dispatch(logout())
                        }
                        
                        }}>
                        Logout
                    </Link>
                </p>
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