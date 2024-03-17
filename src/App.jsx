
import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProductForm from './Components/ProductForm';
import OrderHistory from './Components/OrderHistory';



function App() {

  return (

    < BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
        />
        <Route path='/login' element={
          <>
            <Login />
            <Footer />
          </>
        }
        />
        <Route path="/product-form" element={
          <>
            <Navbar />
            <ProductForm />
            <Footer />
          </>}
        />
        <Route path="/producthistory" element={
          <>
            <Navbar />
            <OrderHistory />
            <Footer />
          </>}
        />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
