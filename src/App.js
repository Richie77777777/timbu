import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ProductDetails from './pages/ProductDetails';
// import Nav from './components/Nav'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Products/>}/>
            <Route path=':id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
