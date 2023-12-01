import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './CRUD/Home';
import Products from './CRUD/Products';
import CreateProduct from './CRUD/CreateProduct';
import Admin from './CRUD/Admin';
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/create" element={<CreateProduct/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
