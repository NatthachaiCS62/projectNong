
import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProductForm from './Components/ProductForm';



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
            <ProductForm />
            <Footer />
          </>}

        />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
