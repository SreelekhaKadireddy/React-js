import React, { Component } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './User/Home'
import Contact from './User/Contact'
import User from './User/User'
class App extends Component {
  render() {
    
    return <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </Router>
    </>
  }
}
export default App;
