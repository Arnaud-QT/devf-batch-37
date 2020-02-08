import React from 'react';
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Pokemon from './components/home/Pokemon';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import $ from 'jquery';
//import Login from './components/home/login';
      //<Login/>
// import Button from './components/home/button';
     // <Button/>

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Route path="/home" componente={Header}/>
  
        <Pokemon/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;


