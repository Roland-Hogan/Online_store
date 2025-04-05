import { createContext } from "react";

/**
 * Context is an interface / Bleprint
 * NO IMPLEMENTATION HERE
 */
const DataContext = createContext({
    cart: [],
    user:{},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
    clearCart: () => {},
});

export default DataContext;