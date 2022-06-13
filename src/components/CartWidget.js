import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';


function CartWidget (){

    const test = useContext(CartContext); 
    
    return (
        <Badge badgeContent={4} color="secondary"> 
            <ShoppingCartIcon color="success"/>
        </Badge>
    )
        
}

export default CartWidget;
