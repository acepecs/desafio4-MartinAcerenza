import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartWidget (){

    const test = useContext(CartContext); 
    
    return(
<React.Fragment>
    <img src="https://img2.freepng.es/20180515/zfw/kisspng-shopping-cart-logo-shopping-bags-trolleys-5afb65b09c72d4.3564791415264250086408.jpg"></img>
</React.Fragment>
    )
        
}

export default CartWidget;
