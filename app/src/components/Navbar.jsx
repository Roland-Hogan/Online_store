import { useContext } from "react";
import "./Navbar.css"

import {Link} from 'react-router-dom'
import DataContext from "../state/dataContext";

function Navbar(){

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getNumofProds() {
        //sum the quantities off all the products
        let sum = 0;
        for(let i=0; i<cart.length; i++) {
            const prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }

    return(
        <div className="navbar">
            <span className='title'>Organika</span>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>

                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/admin">Admin</Link>
                </li>

                <li className="cart-container">
                    <Link to="/cart" className="btn btn-outline-dark">
                    <span className="badge text-bg-success">{getNumofProds()}</span>
                    
                <i class="fa-solid fa-cart-shopping"></i>
                    Cart
                    </Link>

                    <button className="btn btn-outline-dark">
                    <i className="fa-regular fa-circle-user"></i>
                        {user.name}
                    </button>
                </li>
            </ul>
        

        </div>
    );
}

export default Navbar;