import './App.css';
import NavBar from './components/NavBar/NabBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import cart from './assets/img/product.png'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='catalog'>
        <ItemListContainer
        image = {cart}
        product = {"Example product"}
        stock = {parseInt((Math.random() + 1) * 5)}
        price = {30}
        description = {"Descripcion de ejemplo"}
        >
        </ItemListContainer>
      </div>  
    </div>
  );
}

export default App;
