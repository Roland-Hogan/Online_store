
import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    const [cart, setCart]= useState([]);
    const [user, setUser]= useState({id:9865, name:"John", email:"johnDoe@yahoo.com"});

    function addProdToCart(item) {
        console.log("Global add");
        
        /**
        * create a copy
        * modify the copy
        * set the copy back
        */
       let copy = [...cart];
       copy.push(item);
       setCart(copy);
    }

    function removeProdFromCart() {}

    function clearCart() {}

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
            clearCart: clearCart,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalProvider;