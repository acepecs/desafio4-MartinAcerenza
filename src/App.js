
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Products from './components/Products';
import ItemCount from './components/ItemCount';

const App = () => {
  return (
    <>
    <div className="App">
     <h1>Cuidemos la tierra</h1>
     <hr/>
     <Navbar></Navbar>
     <ItemListContainer greeting='Hola usuario'></ItemListContainer>
     <ItemCount></ItemCount>
    </div>
    <h2>
      Productos 
    </h2>
    {/*productos("miel", "Precio: $800")*/}
    <Products name="miel" price="Precio: $800"/>
    {/*productos("azucar mascabo","Precio: $500")*/}
    <Products name="azucar mascabo" price="Precio: $500"/>
    <div>
      Formas de pago
    </div>
    </>

  );
}

export default App;
