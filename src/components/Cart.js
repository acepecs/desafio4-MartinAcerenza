import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const test = useContext(CartContext);
    return (
        <>
        {
            test.length === 0 ? <p>Your Cart is empty</p> 
            : test.map((item) => (<p>{item.name}</p>))
        }
        </>
    );
}

export default Cart;