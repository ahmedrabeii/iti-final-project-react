import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import CategoryBooks from './Pages/CategoryBooks/CategoryBooks';
import ProductDetails from './Pages/Product/ProductDetails';
import Books from './Pages/Books';
import Carts from './Pages/Carts/Carts';

function App() {
  return (
    <Router>
     <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:name" element={<CategoryBooks />} />
          <Route path="/books/:id" element={<ProductDetails />} />

          <Route path="/books/:name" element={<Books />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
