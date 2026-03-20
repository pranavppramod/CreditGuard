import React, { useState } from 'react';

const CreditPredictor = ({ isDarkMode }) => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    setTimeout(() => {
      setPrediction({
        status: "Approved",
        message: "Based on our AI analysis, your credit risk profile is low. You are eligible for the requested terms."
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full md:w-[80%] mx-auto pt-7 pb-20 transition-all duration-500">
      {!prediction ? (
        <button
          onClick={handlePredict}
          disabled={loading}
          className={`group relative w-full md:w-auto px-8 py-4 md:px-12 md:py-6 
                     font-black text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] 
                     rounded-xl md:rounded-2xl overflow-hidden transition-all 
                     hover:scale-105 active:scale-95 disabled:opacity-100 backdrop-blur-2xl
                     mx-auto uppercase shadow-2xl text-black bg-white/10 border-white/10 dark:text-white border-b dark:bg-black/10 dark:border-b dark:border-black/10`}
        >
          <span className="relative z-10 antialiased">
            {loading ? "Analyzing Profile..." : "Generate Credit Report"}
          </span>
          <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
        </button>
      ) : (
        <div className={`text-center space-y-4 md:space-y-6 animate-in fade-in zoom-in duration-500 w-full max-w-2xl 
                        p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border 
                        backdrop-blur-3xl shadow-2xl mx-auto transition-all duration-500
                        dark:text-white dark:bg-black/10 dark:border-black/10 text-black bg-white/10 border-white/10`}>
          
          <div className="space-y-2">
            <span className={`text-[10px] font-black uppercase tracking-[0.4em] opacity-50`}>
              Analysis Result
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
              {prediction.status}
            </h1>
          </div>
          
          <p className={`text-base md:text-xl max-w-md mx-auto leading-relaxed text-black/70 font-light dark:text-white`}>
            {prediction.message}
          </p>
          
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