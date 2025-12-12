import React, { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BusinessSetupPage from './pages/BusinessSetupPage.jsx';
import GoldenVisaPage from './pages/GoldenVisaPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResidentialRealEstatePage from './pages/ResidentialRealEstatePage.jsx';
import CommercialRealEstatePage from './pages/CommercialRealEstatePage.jsx';
import BusinessBuySellPage from './pages/BusinessBuySellPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx'; // Add this import
import { navItems, contactDetails } from './components/Data.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page) => {
    console.log('Navigating to:', page); // Debug log
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage handleNavClick={handleNavClick} />;
      case 'aboutpage': // ← Changed from 'about' to 'aboutpage'
        return <AboutPage handleNavClick={handleNavClick} />;
      case 'businesssetup':
        return <BusinessSetupPage handleNavClick={handleNavClick} />;
      case 'goldenvisa':
        return <GoldenVisaPage handleNavClick={handleNavClick} />;
      case 'contactpage':
        return <ContactPage handleNavClick={handleNavClick} />;
      case 'residential':
        return <ResidentialRealEstatePage handleNavClick={handleNavClick} />;
      case 'commercial':
        return <CommercialRealEstatePage handleNavClick={handleNavClick} />;
      case 'buyingselling': // ← Changed from 'businessbuysell' to 'buyingselling'
        return <BusinessBuySellPage handleNavClick={handleNavClick} />;
      default:
        console.log('Page not found, defaulting to home:', currentPage);
        return <HomePage handleNavClick={handleNavClick} />;
    }
  };

  return (
    <div className="App">
      <Header 
        page={currentPage}
        handleNavClick={handleNavClick}
        navItems={navItems}
        contactDetails={contactDetails}
      />
      <main>
        {renderPage()}
      </main>
      <Footer 
        handleNavClick={handleNavClick}
        contactDetails={contactDetails}
      />
      <WhatsAppButton /> {/* Add WhatsApp button */}
    </div>
  );
}

export default App;