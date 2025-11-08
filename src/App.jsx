// import './App.css'
import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import BlogListing from './components/BlogListing'
import BrandsListing from './components/BrandsListing'
import CCTVListing from './components/CCTVListing'
import FireAlarmListing from './components/FireAlarmListing'
import AllCategories from './components/AllCategories'
import BulkDeals from './components/BulkDeals'
import GIPipes from './components/GIPipes'
import SmartSurveillanceCalculator from './components/SmartSurveillanceCalculator'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <Router>
      <Box minH="100vh" w="100%" maxW="100vw" display="flex" flexDirection="column" bg="rgb(239,239,244)" overflowX="visible">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogListing />} />
          <Route path="/brands" element={<BrandsListing />} />
          <Route path="/cctv" element={<CCTVListing />} />
          <Route path="/fire-alarm" element={<FireAlarmListing />} />
          <Route path="/all-categories" element={<AllCategories />} />
          <Route path="/bulk-deals" element={<BulkDeals />} />
          <Route path="/gi-pipes" element={<GIPipes />} />
          <Route path="/calculator" element={<SmartSurveillanceCalculator />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  )
}

export default App
