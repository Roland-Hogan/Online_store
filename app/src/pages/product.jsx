import QuantityPicker from "../components/QuantityPicker";
import "./Product.css";

function Product(){

    function add(){
        console.log("Adding prod");
}
    return(
        <div className="product">
            <h5>Title Here</h5>


            <QuantityPicker />


            <button className='btn btn-sm btn-success' onClick={add}>
            <i class="fa-solid fa-cart-plus"></i>
                Add
            </button>
        </div>
    );
}

export default Product;