import { useState } from "react";
import "./Discount.css"

function Discount(){
    const [allCoupons, setAllCoupons] = useState([]);

    const [coupon, setCoupon] = useState({
        code:"",
        discount:"",
    });

    function save() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;
        //console.log(data.name, "|", data.value);
        /**
         *  3 steps to modify obj or Arrays in Staet vars
         * - Create a copy
         * - Modify the copy
         * - Set the copy
         */
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    }

    return(
        <div className="discounts">
            <h3>Discount codes</h3>

            <div className='form-field'>
                <label className='form-lable'>Code:</label>
                <input className='form-control' type="text" onBlur={handleCoupon} name="code"/>
            </div>

            <div className='form-field'>
                <label className='form-lable'>Discount:</label>
                <input className='form-control' type="number" onBlur={handleCoupon} name="discount"/>
            </div>

            <button className='btn btn-sm btn-dark' onClick={save}Save></button>

            <ul className='coupon-list'>
                {allCoupons.map( cp => <li>{cp.code} - {cp.discount}%</li>)}
            </ul>

        </div>
    );
}

export default Discount;
