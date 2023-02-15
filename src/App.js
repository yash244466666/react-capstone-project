import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesHome from './pages/HomePage';
import CountryDetails from './pages/DetailsPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<CountriesHome />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default App;
