import { useState } from "react"

const ItemCount = (props) => {

    const [compras, setCompras] = useState (0);

    const increment = () =>{

        if (compras < 5) setCompras(compras+1);
    }
    return(
        <>
        <p>{compras} items</p>
        <button onClick={increment}>agregar</button>
        </>
    )
}

export default ItemCount;