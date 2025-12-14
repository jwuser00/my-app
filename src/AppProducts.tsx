import './App.css'
import { useState } from 'react';
import Products from './components/products';


function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
      <div>
        <h2 className="text-3xl">AppProducts</h2>
        <h2 className="text-2xl">AppProducts</h2>
        <h2 className="text-red-900 text-8xl rounded-3xl bg-blue-500 bg-origin-padding">AppProducts</h2>
      </div>
    </div>
  );
}

export default AppProducts;
