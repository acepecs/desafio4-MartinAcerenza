import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [compras, setCompras] = useState (1);

    const Increment = () =>{

        if (compras < 5) setCompras(compras+1);
    }

    const Decrease = () => {
        if (compras > 0) setCompras(compras-1);
    }

    return(
    <div>
        <botton onClick={Increment}>+</botton>
        <div>
        {compras} 
        </div>
        <botton onClick={Decrease}>-</botton>
        <div>
        <button onClick={() => onAdd(compras)}>agregar compra</button>
        </div>
    </div>
    )
}

export default ItemCount;