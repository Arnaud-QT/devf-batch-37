import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
//import Login from './components/home/login';
      //<Login/>
// import Button from './components/home/button';
     // <Button/>
import Pokemon from './components/home/Pokemon';

function App() {
  return (
    <div className = "App">
      <Header/>
 
      <Pokemon/>
      <Footer/>
    </div>
  );
}

export default App;


