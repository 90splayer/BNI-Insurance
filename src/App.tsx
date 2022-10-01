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
import ProductItemPage from './pages/TravelPage';
import TravelPage from './pages/TravelPage';
import FamilyPage from './pages/FamilyPage';
import BusinessPage from './pages/BusinessPage';
import CarPage from './pages/CarPage';
import HealthPage from './pages/HealthPage';
import HousePage from './pages/HousePage';
import EmployeePage from './pages/EmployeePage';
import BondsPage from './pages/BondsPage';
import PensionPage from './pages/PensionPage';
import BoardPage from './pages/BoardPage'
import WhyUsPage from './pages/WhyUsPage';

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
    <Route path="familyinsurance" element={<FamilyPage />} />
    <Route path="businessinsurance" element={<BusinessPage />} />
    <Route path="carinsurance" element={<CarPage />} />
    <Route path="travelinsurance" element={<TravelPage />} />
    <Route path="healthinsurance" element={<HealthPage />} />
    <Route path="houseinsurance" element={<HousePage />} />
    <Route path="employeeinsurance" element={<EmployeePage />} />
    <Route path="bondsinsurance" element={<BondsPage />} />
    <Route path="pensioninsurance" element={<PensionPage />} />
    <Route path="products/familyinsurance" element={<FamilyPage />} />
    <Route path="products/businessinsurance" element={<BusinessPage />} />
    <Route path="products/carinsurance" element={<CarPage />} />
    <Route path="products/travelinsurance" element={<TravelPage />} />
    <Route path="products/healthinsurance" element={<HealthPage />} />
    <Route path="products/houseinsurance" element={<HousePage />} />
    <Route path="products/employeeinsurance" element={<EmployeePage />} />
    <Route path="products/bondsinsurance" element={<BondsPage />} />
    <Route path="products/pensioninsurance" element={<PensionPage />} />
    <Route path="aboutboard" element={<BoardPage />} />
    <Route path="whyus" element={<WhyUsPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
