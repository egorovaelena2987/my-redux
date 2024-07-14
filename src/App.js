import './App.css';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponet/Clothes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className="block">
     <AllCategories/>
     <Cart/>
     </div>
     <div className="block">
     <Clothes/>
     </div>
    </div>
  );
}

export default App;
