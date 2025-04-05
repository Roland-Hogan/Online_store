import { useContext, useState } from "react";
import QuantityPicker from "../components/QuantityPicker";
import "./Product.css";
import DataContext from "../state/dataContext";

function Product(props){
    const [quantity, setQuantity]= useState(1);

    const addProdToCart = useContext(DataContext).addProdToCart;
    
    
    function add(){
        console.log("Adding prod");

        // create a copy of props.data call it prodForCart
        let prodForCart = {...props.data};
        // add quantity
        prodForCart.quantity = quantity;
        // send it to cart
        addProdToCart(prodForCart);
        
    }

    function handleQuantity(val){
        console.log("Quantity changed!", val);
        setQuantity(val);
        
    }

    return(
        <div className="product">

            <img src={props.data.image} alt=""></img>

            <h5>{props.data.title}</h5>

        <div className="prices">
            <label className='unit'>Unit Price</label>
            <label className='unit'>Total</label>
        </div>

        <div className="prices">
            <label className='unit'>${props.data.price.toFixed(2)}</label>
            <label className='total'>${(props.data.price * quantity).toFixed(2)}</label>
        </div>

        <div className="controls">
            <QuantityPicker onChange={handleQuantity} />


            <button className='btn btn-sm btn-success' onClick={add}>
            <i className="fa-solid fa-cart-plus"></i>
                Add
            </button>
        </div>
        </div>
    );
}

export default Product;