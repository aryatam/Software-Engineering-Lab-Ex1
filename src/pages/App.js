import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // هنوز وجود نداره
import HomePage from './pages/HomePage';    // هنوز وجود نداره
import AboutPage from './pages/AboutPage';  // هنوز وجود نداره
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header title="Simple React App" />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;