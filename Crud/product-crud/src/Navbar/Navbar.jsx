import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/home">CRUD</Link>  
        <div className='ml-auto'>
          <ul className='navbar-nav'>
              <li><Link className='nav-link' to="/home">Home</Link></li>
              <li><Link className='nav-link' to="/products">Products</Link></li>
              <li><Link className='nav-link' to="/admin">Admin</Link></li>
              <li><Link className='nav-link' to="/create">Create</Link></li>
              
          </ul>
        </div>
        </nav>
    )
}
export default Navbar