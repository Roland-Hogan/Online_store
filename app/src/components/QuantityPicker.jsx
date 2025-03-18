import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(){
    const [ quantity, setQuantity] = useState(1);

    function increase(){
        let val = quantity + 1;
        setQuantity(val);
    }
    
    function decrease() {
        if(quantity == 1) return;
        
        let val = quantity - 1;
        setQuantity(val);
    }
        
    return(
        <div className="qt-picker">
            <button className='btn  btn-sm btn-outline-danger' disabled={quantity == 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn  btn-sm btn-outline-primary' onClick={increase}>+</button>
        </div>
    );

}

export default QuantityPicker;