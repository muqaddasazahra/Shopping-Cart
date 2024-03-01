
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import ShoppingCartContextProvider from './components/Store/shopping-cart.jsx';

function App() {
 
  return (
    <ShoppingCartContextProvider>
      <Header/>
      <Shop/>
    </ShoppingCartContextProvider>
  );
}

export default App;
