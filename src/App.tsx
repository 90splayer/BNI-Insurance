import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import Product from './components/templates/products/Product'
import AboutUs from './components/templates/about/AboutUs';
import ProductPage from './pages/ProductPage';
import InsightPage from './pages/InsightPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="products" element={<ProductPage />} />
    <Route path="insights" element={<InsightPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="contact" element={<ContactPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
