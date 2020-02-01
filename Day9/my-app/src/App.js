import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Login from './components/home/login';

function App() {
  return (
    <div className = "App">
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;


