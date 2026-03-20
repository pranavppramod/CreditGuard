import React, { useState } from 'react';

const PersonalFinancial = () => {
  const [activeField, setActiveField] = useState(null);
  const [financials, setFinancials] = useState({ loanAmount: 0, income: 0 });
  const [residenceType, setResidenceType] = useState('Owned');

  // Dynamic style for both Dark and Light modes
  const getFieldStyle = (fieldName) => {
    const isActive = activeField === fieldName;
    return `p-6 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
      isActive
        ? 'border-black/30 dark:border-white/50 bg-white/60 dark:bg-white/10 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]'
        : 'border-black/10 dark:border-white/5 bg-white/20 dark:bg-white/5 opacity-90'
    }`;
  };

  // Theme-aware shared classes
  const inputClass = "w-full bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-slate-900 dark:text-white text-lg py-1 transition-all appearance-none placeholder:text-slate-900/30 dark:placeholder:text-white/20";
  const labelClass = "block text-slate-900 dark:text-white text-[10px] font-black mb-2 uppercase tracking-[0.2em] opacity-60";

  return (
    <div className="h-auto min-w-screen w-full md:w-[80%] mx-auto flex items-center justify-center px-4 pt-7 pb-20 md:p-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-15 items-stretch">

        {/* LEFT COLUMN: Personal Information */}
        <div className="flex-1 flex flex-col p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500">
          <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-6 md:mb-10 uppercase tracking-[0.3em] border-b border-black/10 dark:border-white/10 pb-4">
            Personal <span className="text-slate-900/30 dark:text-white/30 font-light">Data</span>
          </h2>

          <div className="space-y-6 flex-grow">
            <div className={getFieldStyle('age')} onFocus={() => setActiveField('age')}>
              <label className={labelClass}>Current Age</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="00" className={inputClass} />
            </div>

            <div className={getFieldStyle('dependants')} onFocus={() => setActiveField('dependants')}>
              <label className={labelClass}>Dependants</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="0" className={inputClass} />
            </div>

            <div className={getFieldStyle('residence')} onFocus={() => setActiveField('residence')}>
              <label className={labelClass}>Residence Type</label>
              <div className="mt-4">
                <div className="grid grid-cols-2 sm:flex sm:gap-6 gap-4">
                  {['Owned', 'Rented', 'Mortgage'].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group py-1">
                      <input
                        type="radio"
                        name="residence_type"
                        checked={residenceType === type}
                        onChange={() => setResidenceType(type)}
                        className="w-5 h-5 sm:w-4 sm:h-4 accent-slate-900 dark:accent-white cursor-pointer"
                      />
                      <span className={`text-slate-900 dark:text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-opacity ${
                        residenceType === type ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                      }`}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className={getFieldStyle('years')} onFocus={() => setActiveField('years')}>
              <label className={labelClass}>Years At Current Residence</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="decimal" placeholder="0.00" className={inputClass} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Financial Profile */}
        <div className="flex-1 flex flex-col p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500">
          <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-6 md:mb-10 uppercase tracking-[0.3em] border-b border-black/10 dark:border-white/10 pb-4">
            Financial <span className="text-slate-900/30 dark:text-white/30 font-light">Profile</span>
          </h2>

          <div className="space-y-6 flex-grow">
            <div className={getFieldStyle('balance')} onFocus={() => setActiveField('balance')}>
              <label className={labelClass}>Bank Balance (USD)</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="decimal" placeholder="0.00" className={inputClass} />
            </div>

            <div className={getFieldStyle('lti')} onFocus={() => setActiveField('lti')}>
              <label className={labelClass}>LTI Analytics</label>
              <div className="flex flex-col gap-6 mt-4">
                <div>
                  <span className="text-[9px] text-slate-900/40 dark:text-white/40 uppercase font-black tracking-widest block mb-1">Requested Loan</span>
                  <input
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    inputMode="decimal"
                    placeholder="0.00"
                    className={inputClass}
                    onChange={(e) => setFinancials({ ...financials, loanAmount: parseFloat(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <span className="text-[9px] text-slate-900/40 dark:text-white/40 uppercase font-black tracking-widest block mb-1">Annual Income</span>
                  <input
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    inputMode="decimal"
                    placeholder="0.00"
                    className={inputClass}
                    onChange={(e) => setFinancials({ ...financials, income: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>
            </div>

            <div className={getFieldStyle('utilization')} onFocus={() => setActiveField('utilization')}>
              <label className={labelClass}>Credit Utilization</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" max="100" placeholder="0%" className={inputClass} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalFinancial;