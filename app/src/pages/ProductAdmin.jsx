import { useState } from "react";
import "./ProductAdmin.css"
import DataService from "../services/DataService";

function ProductAdmin(){
    const [product, setProduct] = useState({
        title: '',
        price: '',
        image: '',
        category: '' 
    });

    function handleChange(e) {
        let text = e.target.value;
        let name = e.target.name;

        console.log(name, text);

        let copy = {...product};
        copy[name] = text;
        setProduct(copy);

        
    }

    async function save() {
        console.log("saving product", product);

        let fixedProduct = {...product};
        fixedProduct.price =parseFloat(product.price);

        // send it to the service
        let response = await DataService.saveProduct(fixedProduct);
        console.log(response);
        
        
    }
    return (
        <div className="prod-admin">
            <h3>Products</h3>

            <div className="form-field">
                <label className="form-label">Title</label>
                <input className='form-control' type="text" onBlur={handleChange} name="title"/>
            </div>
        
            <div className="form-field">
                <label className="form-label">Price</label>
                <input className='form-control' type="text" onBlur={handleChange} name="price"/>
            </div>

            <div className="form-field">
                <label className="form-label">Image</label>
                <input className='form-control' type="text" onBlur={handleChange} name="image"/>
            </div>

            <div className="form-field">
                <label className="form-label">Category</label>
                <input className='form-control' type="text" onBlur={handleChange} name="category"/>
            </div>

            <button onClick={save} className="btn btn-sm btn-dark">Save Product</button>
        </div>
    )
}

export default ProductAdmin;