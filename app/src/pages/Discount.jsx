import "./Discount.css"

function Discount(){

    function save(){
        console.log("saving discount");
    
    }

    return(
        <div className="discounts">
            <h3>Discount codes</h3>

            <div className='form-field'>
                <label className='form-lable'>Code:</label>
                <input className='form-control' type="text" />
            </div>

            <div className='form-field'>
                <label className='form-lable'>Discount:</label>
                <input className='form-control' type="text" />
            </div>

            <button className='btn btn-sm btn-primary' onClick={save}Save></button>

        </div>
    );
}

export default Discount;
