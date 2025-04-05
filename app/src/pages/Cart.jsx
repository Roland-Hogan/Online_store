import { useContext } from 'react';
import './Cart.css'
import DataContext from '../state/dataContext';
import { Link } from 'react-router-dom';

function Cart() {


    // read trhe cart from the context
    const cart = useContext(DataContext).cart;

    function getNumofProds() {
        //sum the quantities off all the products
        let sum = 0;
        for(let i=0; i<cart.length; i++) {
            sum += cart [i].quantity;
        }

        return sum;
    }

    function getTotal(){
        let total = 0;
        for(let i=0; i< cart.length; i++) {
            let prod = cart[i];
            total += (prod.price * prod.quantity);
        }

        return total.toFixed(2);
    }
    function getCartEmptyMessage  () {
        if(cart.length > 0) return null;

        return (
            <div className='empty-alert'>

                <h5>Your cart is empty, you can add products from the catalog page!</h5>
                <Link className='btn btn-outline-primary' to="/catalog">Go to Catalog</Link>
            </div>
        )
    }

    return (
        <div className="cart page">
            <h1>Cart</h1>
            <h4>We have {getNumofProds()} products ready for you</h4>

            { getCartEmptyMessage() }

        <div className='parent'>
            <div className="prod-list">
                {cart.map( prod => 
                    <div className="cart-prod">
                        <img src={prod.image} alt=""></img>
                        <label className='title'>{prod.title}</label>
                        <label className='frac-1'>${prod.price}</label>
                        <label className='frac-1'>{prod.quantity}</label>
                        <label className='frac-1'>${(prod.price *  prod.quantity).toFixed(2)}</label>
                        <button className='btn btn-sm btn-danger'>Remove</button>
                    </div>
                )}
            </div>

            <div className="total">
                <h4>Complete you order</h4>

                <h2>${getTotal()}</h2>

                <Link to="/thankyou" clasName='btn btn-success'>Pay Here</Link>
            </div>
        </div>
        </div>
    );
}

export default Cart;