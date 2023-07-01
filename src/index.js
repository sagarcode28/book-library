import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { AppProvider } from './Context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Booklist from './Components/Booklist/Booklist';
import Bookdetails from './Components/Bookdetails/Bookdetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='book' element={<Booklist />} />
          <Route path='/book/:id' element={<Bookdetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

