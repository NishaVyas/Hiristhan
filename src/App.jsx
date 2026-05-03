import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import ServicePage1 from './Pages/ServicePage1'; 
import ServicePage2 from './Pages/ServicePage2'; 
import PrivacyPolicy from './Components/Policies/PrivacyPolicy';
import TermsCondition from './Components/Policies/TermsCondition';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import HireSalesforcePage from './Pages/HireSalesforcePage';
import HireServiceNowPage from './Pages/HireServiceNowPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/hire-servicenow-professionals" element={<HireServiceNowPage />} /> 
        <Route path="/hire-salesforce-professionals" element={<ServicePage2 />} /> 
        <Route path="/hire-salesforce-developer" element={<HireSalesforcePage />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/privacy-policy" element={
          <>
                <Navbar />
                <PrivacyPolicy />
                <Footer/>
              </>
          
          } /> 
        <Route path="/terms-and-condition" element={
          <>
                <Navbar />
                <TermsCondition />
                <Footer />
              </>
          
          } /> 
      </Routes>
    </Router>
  );
};

export default App;
