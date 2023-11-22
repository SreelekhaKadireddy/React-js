import './App.css';
import Product from './product_setState'
import { Fragment } from 'react';
import Listrender from './rendering/Listrendering';
import Conditionalrender from './rendering/Conditionalrender';
import Login from './Form Handling/Login';
import Register from './Form Handling/Register';

function App() {
  return (
    <Fragment>
      <Product/>
      <hr/>
      <Listrender/>
      <hr/>
      <Conditionalrender/>
      <hr/>
      <Login/>
      <hr/>
      <Register/>
    </Fragment>
    
  );
}
    
export default App;
