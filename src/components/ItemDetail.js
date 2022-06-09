import { Button } from '@material-ui/core';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        //agregar este producto al carrito
        test.addToCart(item);
    }

    return (
        <>
        {
            item && item.pictureUrl
            ? 
            <div>
                <div>
                    <div>
                        <div src={item.pictureUrl[1]} />
                    </div>
                    <div>
                        <div>{item.name}</div>
                        <div>$ {item.cost}</div>
                        <div>{item.stock} unidades en stock</div>
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/Cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;