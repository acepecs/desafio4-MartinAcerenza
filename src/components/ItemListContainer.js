import ItemCount from "./ItemCount";


const ItemListContainer = (props) => {
  const onAdd = (compras) => {
    alert ("has comprado " + compras + " items" )
}
    return (
      <>
      <div>{props.greeting}</div>
      <h2>Contador</h2>
      <ItemCount stock="5" initial={1} onAdd={onAdd}></ItemCount>
      </>
    )
  }

  export default ItemListContainer;
