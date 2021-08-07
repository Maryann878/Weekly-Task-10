
import './App.css'
import React from "react";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from  './Pages/Login'
// import RouteParam from './Pages/RouteParam.js';

import {Switch,
  Route,Link,
} from "react-router-dom";



function App() {
  

    return (
  
      <div class="App">
       <nav>
        <Link to="/">Home</Link>
         <Link to="/about">About</Link> 
         <Link to="/contact">Contact</Link> 
         <Link to="/login">Login</Link>
       </nav>
     
  
        <Switch>
       <Route path="/about">
         <About/>
       </Route>
       <Route path="/contact">
         <Contact/>
       </Route>
       
       
       <Route path="/login">
         <Login/>
       </Route>

       <Route path="/">
         <Home/>
       </Route>
       </Switch> 
  
       
    </div>
  )
}




export default App
