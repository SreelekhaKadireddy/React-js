import logo from './logo.svg';
import './App.css';
import Product from './product_setState'
import { Fragment } from 'react';
import Listrender from './rendering/Listrendering';
import Conditionalrender from './rendering/Conditionalrender';

function App() {
  return (
    <Fragment>
      <Product/>
      <hr/>
      <Listrender/>
      <hr/>
      <Conditionalrender/>
      
    </Fragment>
    
  );
}
    
export default App;
