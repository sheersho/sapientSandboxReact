
import './App.css';
import Product from './Components/Products';


function App() {
  return (

    <div className="App">
      <h1>My Demo Shop</h1>
      <Product title="Product 1" price="10" description="First product" />
      <Product title="Product 2" price="20" description="Second product" />
    </div>

  )
}

export default App;
