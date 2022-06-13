import { children, createContext } from "react";
import { useState } from "react";

export const CartContext  = createContext ();

const CartContextProvider = (children) =>  {
    const [cartList, setCartList] = useState ([]);

    const addToCart = (item) => {
setCartList([
    ...cartList,
    item
    ]);
    
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }
    
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            {children}
       </CartContext.Provider>
    )
}

export default CartContextProvider;