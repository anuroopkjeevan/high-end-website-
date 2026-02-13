import React, { useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useNavigate, 
  useLocation 
} from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/about";
import Services from "./pages/Services";
import HomeNav from "./components/HomeNav";
import Logo from "./assets/SINGLE LOGO PNG .png";
import { MessageCircle } from "lucide-react";


// =============================
// 1️⃣ SPA ANALYTICS TRACKER
// =============================
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-LMGFDPMFMY", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}


// =============================
// 2️⃣ HASH LINK HANDLER
// =============================
function HashLinkHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}


// =============================
// 3️⃣ WHATSAPP BUTTON (WITH EVENT TRACKING)
// =============================
const WhatsAppButton = () => {
  const phoneNumber = "917560807374"; // Add country code properly
  const message = "Hello! I'm interested in your digital marketing services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "whatsapp_button",
      });
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-30 transition-opacity"></span>

        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20 group-hover:border-white/40">
          <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />

          <span className="absolute right-20 bg-[#1e1e24] text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-xl border border-white/10">
            Chat with us
          </span>
        </div>

        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </div>
    </a>
  );
};


// =============================
// 4️⃣ MAIN APP CONTENT
// =============================
function AppContent() {
  const navigate = useNavigate();

  const handleNavClick = (target) => {
    if (target === "home") navigate("/");
    if (target === "about") navigate("/about");
    if (target === "services") navigate("/services");
    if (target === "work") navigate("/#work");
    if (target === "contactpage") navigate("/#contact");
  };

  return (
    <>
      <AnalyticsTracker />
      <HashLinkHandler />
      <HomeNav handleNavClick={handleNavClick} Logo={Logo} />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home handleNavClick={handleNavClick} Logo={Logo} />} />
        <Route path="/about" element={<About handleNavClick={handleNavClick} Logo={Logo} />} />
        <Route path="/services" element={<Services handleNavClick={handleNavClick} Logo={Logo} />} />
      </Routes>
    </>
  );
}


// =============================
// 5️⃣ APP WRAPPER
// =============================
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
