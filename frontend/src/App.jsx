import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Layout/Header';
import Footer from './components/Layout/Footer.jsx';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AddRecipe } from './pages/AddRecipe';
import { Profile } from './pages/Profile';
import GlobalSearch from './components/GlobalSearch';
import ScrollToTop from './components/ScrollToTop';


// 👇️ Import pages if not already created
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LearnMorePage from './pages/LearnMorePage';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFooterNavigation = (page) => {
    switch (page) {
      case 'about':
        navigate('/about');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'learn-more':
        navigate('/learn-more');
        break;
      case 'home':
      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onSearch={handleSearch} />
      
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                searchQuery={searchQuery} 
                key={searchQuery}
              />
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/global-search" element={<GlobalSearch />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleFooterNavigation} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
