import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MessageCircle } from "lucide-react";

import { AuthProvider, useAuth } from "./context/AuthContext";
import CMSLayout from "./components/cms/CMSLayout";
import PageRenderer from "./components/cms/PageRenderer";
import HomeNav from "./components/HomeNav";
import Logo from "./assets/SINGLE LOGO PNG .png";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import PageManager from "./pages/admin/page manager";
import Settings from "./pages/admin/settings";
import { cmsApi } from "./services/api";
import SEOEngine from "./components/SEOEngine";

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

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (user?.is_staff || user?.is_superuser) {
    return <CMSLayout>{children}</CMSLayout>;
  }

  return <Navigate to="/admin" replace />;
};

const WhatsAppButton = () => {
  const phoneNumber = "917560807374";
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
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick} className="fixed bottom-6 right-6 z-50 group">
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" />
          <span className="absolute right-20 bg-[#1e1e24] text-white px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Chat with us
          </span>
        </div>
      </div>
    </a>
  );
};

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cmsEdits, setCmsEdits] = useState({});

  const isAdminPath = location.pathname.startsWith("/admin");

  useEffect(() => {
    const loadPublicEdits = async () => {
      try {
        const data = await cmsApi.getPublicEdits();
        setCmsEdits(data || {});
      } catch {
        setCmsEdits({});
      }
    };

    if (!isAdminPath) {
      loadPublicEdits();
    }
  }, [location.pathname, isAdminPath]);

  useEffect(() => {
    if (isAdminPath) return;

    const sessionStorageKey = "cms_session_id";
    let sessionId = localStorage.getItem(sessionStorageKey);
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(sessionStorageKey, sessionId);
    }

    cmsApi
      .trackInteraction({
        session_id: sessionId,
        page_path: location.pathname + location.search,
        event_type: "page_view",
      })
      .catch(() => {
        // Non-blocking analytics call.
      });
  }, [location.pathname, location.search, isAdminPath]);

  const handleNavClick = (target) => {
    if (target === "home") navigate("/");
    if (target === "about") navigate("/about");
    if (target === "services") navigate("/services");
    if (target === "blog") navigate("/blog");
    if (target === "blogpost") navigate("/blog");
    if (target === "work") navigate("/#work");
    if (target === "contactpage") navigate("/#contact");
  };

  return (
    <>
      <SEOEngine />
      <AnalyticsTracker />
      <HashLinkHandler />

      {!isAdminPath && (
        <>
          <HomeNav handleNavClick={handleNavClick} Logo={Logo} />
          <WhatsAppButton />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={<PageRenderer pageId="home" interactive={false} pageEdits={cmsEdits.home || {}} pageProps={{ handleNavClick, Logo }} />}
        />
        <Route
          path="/about"
          element={<PageRenderer pageId="about" interactive={false} pageEdits={cmsEdits.about || {}} pageProps={{ handleNavClick, Logo }} />}
        />
        <Route
          path="/services"
          element={<PageRenderer pageId="services" interactive={false} pageEdits={cmsEdits.services || {}} pageProps={{ handleNavClick, Logo }} />}
        />
        <Route
          path="/blog"
          element={<PageRenderer pageId="blog" interactive={false} pageEdits={cmsEdits.blog || {}} pageProps={{ handleNavClick, Logo }} />}
        />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/pages" element={<ProtectedRoute><PageManager /></ProtectedRoute>} />
        <Route path="/admin/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
