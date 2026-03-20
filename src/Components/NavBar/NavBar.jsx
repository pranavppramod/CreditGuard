import React from 'react';

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className={`
      w-[95%] md:w-[80%] mx-auto mt-6 md:mt-8 
      backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 
      border flex items-center justify-between transition-all duration-500
      ${isDarkMode 
        ? "bg-black/10 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]" 
        : "bg-white border-black/10 shadow-xl"
      }
    `}>
      
      {/* Spacer for centering logo on desktop */}
      <div className="hidden md:block w-12"></div>

      {/* TEXT: Strictly Black in Light Mode, White in Dark Mode */}
      <h1 className={`
        text-3xl md:text-6xl font-medium antialiased tracking-tighter text-center transition-colors duration-500
        ${isDarkMode ? "text-white" : "text-black"}
      `}>
        CreditGuard <span className={`font-light ${isDarkMode ? "opacity-30" : "opacity-20"}`}>AI</span>
      </h1>

      {/* Theme Toggle Button: Strictly Monochromatic */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`
          p-3 rounded-xl border transition-all duration-300 group
          ${isDarkMode 
            ? "bg-white/10 border-white/20 hover:bg-white/20" 
            : "bg-black/5 border-black/10 hover:bg-black/10"
          }
        `}
      >
        {isDarkMode ? (
          /* SUN ICON - Pure White Outline */
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          /* MOON ICON - Pure Black Fill */
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-black fill-black group-hover:-rotate-12 transition-transform duration-500" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
    </nav>
  );
};

export default NavBar;