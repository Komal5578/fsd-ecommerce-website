import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import GiftsPage from './pages/GiftsPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {currentPage === 'home' ? (
        <LandingPage onNavigate={() => setCurrentPage('gifts')} />
      ) : (
        <GiftsPage onNavigate={() => setCurrentPage('home')} />
      )}
    </>
  );
}

export default App;
