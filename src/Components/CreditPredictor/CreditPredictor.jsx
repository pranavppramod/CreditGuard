import React, { useState } from 'react';

/**
 * CreditPredictor Component
 * The final stage of the application where data is processed and results are displayed.
 * Features:
 * - Simulated async loading state for "AI Analysis".
 * - Conditional rendering between a CTA button and a Result card.
 * - High-impact typography for status reporting.
 */
const CreditPredictor = ({ isDarkMode }) => {
  /* --- STATE MANAGEMENT --- */
  // Holds the prediction object {status, message} or null if not processed
  const [prediction, setPrediction] = useState(null);
  
  // Controls the loading spinner/text state during the simulated API call
  const [loading, setLoading] = useState(false);

  /* --- SIMULATED PROCESSING LOGIC --- */
  /**
   * handlePredict: Simulates a network request to an AI backend.
   * Uses a 2000ms timeout to provide a "thinking" feel to the UX.
   */
  const handlePredict = async () => {
    setLoading(true);
    // Simulate API Latency
    setTimeout(() => {
      setPrediction({
        status: "Approved",
        message: "Based on our AI analysis, your credit risk profile is low. You are eligible for the requested terms."
      });
      setLoading(false);
    }, 2000);
  };

  return (
    /* --- SECTION CONTAINER --- */
    <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full md:w-[80%] mx-auto pt-7 pb-20 transition-all duration-500">
      
      {/* 1. INITIAL STATE: GENERATE BUTTON
          Shown only if there is no prediction result yet.
      */}
      {!prediction ? (
        <button
          onClick={handlePredict}
          disabled={loading}
          className={`group relative w-full md:w-auto px-8 py-4 md:px-12 md:py-6 
                       font-black text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] 
                       rounded-xl md:rounded-2xl overflow-hidden transition-all 
                       hover:scale-105 active:scale-95 disabled:opacity-100 backdrop-blur-2xl
                       mx-auto uppercase shadow-2xl text-black bg-white/10 border-white/10 dark:text-white border-b dark:bg-black/5 dark:border-b dark:border-black/10`}
        >
          {/* Button Text - Changes based on loading state */}
          <span className="relative z-10 antialiased">
            {loading ? "Analyzing Profile..." : "Generate Credit Report"}
          </span>
          
          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
        </button>
      ) : (
        
        /* 2. RESULT STATE: ANALYSIS CARD
           Displays the "Approved/Rejected" status with entrance animations.
        */
        <div className={`text-center space-y-4 md:space-y-6 animate-in fade-in zoom-in duration-500 w-full max-w-2xl 
                        p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border 
                        backdrop-blur-3xl shadow-2xl mx-auto transition-all duration-500
                        dark:text-white dark:bg-black/10 dark:border-black/10 text-black bg-white/10 border-white/10`}>
          
          {/* Result Header */}
          <div className="space-y-2">
            <span className={`text-[10px] font-black uppercase tracking-[0.4em] opacity-50`}>
              Analysis Result
            </span>
            {/* Status Display (e.g., APPROVED) */}
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
              {prediction.status}
            </h1>
          </div>
          
          {/* Detailed Message from "AI" */}
          <p className={`text-base md:text-xl max-w-md mx-auto leading-relaxed text-black/70 font-light dark:text-white`}>
            {prediction.message}
          </p>
          
          {/* RESET ACTION: Allows the user to return to the initial state */}
          <button 
            onClick={() => setPrediction(null)}
            className={`text-[10px] md:text-xs underline pt-6 md:pt-10 block mx-auto uppercase font-bold tracking-[0.2em] transition-colors text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white`}
          >
            Run New Analysis
          </button>
        </div>
      )}
    </div>
  );
};

export default CreditPredictor;