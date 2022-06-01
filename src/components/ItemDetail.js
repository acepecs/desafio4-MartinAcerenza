import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
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
                        : <Link to='/Cart' style={{textDecoration: "none"}}></Link>
                    }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;