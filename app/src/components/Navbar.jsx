import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <span className='title'>Organika</span>
            <ul>
                <li>Home</li>
                <li>Catalog</li>
                <li>About</li>
            </ul>

        </div>
    );
}

export default Navbar;