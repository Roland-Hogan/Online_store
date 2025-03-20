import "./ProductAdmin.css"

function ProductAdmin(){
    return (
        <div className="prod-admin">
            <h3>Products</h3>

            <div className="form-field">
                <label className="form-label">Title</label>
                <input className='form-control' type="text" />
            </div>
        
            <div className="form-field">
                <label className="form-label">Price</label>
                <input className='form-control' type="text" />
            </div>

            <div className="form-field">
                <label className="form-label">Image</label>
                <input className='form-control' type="text" />
            </div>

            <div className="form-field">
                <label className="form-label">Category</label>
                <input className='form-control' type="text" />
            </div>

            <button className="btn btn-sm btn-dark">Save Product</button>
        </div>
    )
}

export default ProductAdmin;