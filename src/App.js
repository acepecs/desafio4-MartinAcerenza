
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
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
    </>

  );
}

export default App;
