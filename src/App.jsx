import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layouts/Header/header';
import { Footer } from './components/Layouts/Footer/footer';
import { Home } from './components/Pages/Home/Home';
import { Aboutus } from './components/Pages/Aboutus/about-us';
import './App.css'
import './index.scss';
import { Testimoinials } from './components/Pages/Testimonials/testimonials';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/testimonials" element={<Testimoinials />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
