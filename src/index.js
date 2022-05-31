import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AjoutPlatPage from './Pages/AjoutPlatPage';
import DetailPlatPage from './Pages/DetailPlatPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ajoutplat" element={<AjoutPlatPage />} />
      <Route path="/detailplat" element={<DetailPlatPage />} />
    </Routes>
  </BrowserRouter>
);
