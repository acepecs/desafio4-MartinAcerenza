import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
const { products } = require('../utils/products');

const ItemListContainer = (props) => {

    const [datos,setDatos] = useState([]);

  useEffect (() => {
    customFetch(2000,products)
    .then(result => setDatos(result))
    .catch(err => console.log(err))
  }, [])

  const onAdd = (compras) => {
    alert ("has comprado " + compras + " items" )
}
    return (
      <>
      <div>{props.greeting}</div>
      <ItemList items={datos}/>
      <h2>Contador</h2>
      <ItemCount stock="5" initial={1} onAdd={onAdd}></ItemCount>
      </>
    )
  }

  export default ItemListContainer;
