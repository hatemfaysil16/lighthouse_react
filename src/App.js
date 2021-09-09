import React from 'react';
import {BrowserRouter, Route}from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Products from './components/Products';

import Customers from './components/Customers';
import Carosel from './components/Carosel';
import Footer from './components/Footer';
import Header from './components/Header';
import './Scss/Style.scss';




function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Carosel/>
      <Route exact path="/"component={Home}/>
      <Route path="/products"component={Products}/>
      <Route path="/gallery"component={Gallery}/>
      <Route path="/contactUs"component={ContactUs}/>
      <Route path="/customers"component={Customers}/>
      <Route path="/footer"component={Footer}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

// 01090770145 
// 01005414747
// شءون عاملين 

