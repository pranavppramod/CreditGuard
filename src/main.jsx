import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import PersonalFinancial from './Components/PersonalFinancial/PersonalFinancial.jsx'
import LoanTerms from './Components/LoanTerms/LoanTerms.jsx'
import CreditPredictor from './Components/CreditPredictor/CreditPredictor.jsx'

const MainApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme class to the root element
  useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark'); // Adds to <html>
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);

  // Define your wallpaper paths here
  const darkWallpaper = "url('/src/assets/bg_dark.jpg')";
  const lightWallpaper = "url('/src/assets/bg_light.png')";

  return (
    <div className="relative min-h-screen transition-colors duration-700">
      {/* BACKGROUND LAYER: Smooth Cross-fade Wallpapers */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: lightWallpaper,
          opacity: isDarkMode ? 0 : 1 
        }}
      />
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: darkWallpaper,
          opacity: isDarkMode ? 1 : 0 
        }}
      />

      {/* CONTENT */}
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="relative z-10 space-y-12 pb-20">
        <PersonalFinancial />
        <LoanTerms />
        <CreditPredictor />
      </main>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)