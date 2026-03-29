import React, { useState } from 'react';

/**
 * LoanTerms Component
 * A specialized form section for capturing loan specifics and credit history.
 * * Features:
 * - Interactive focus states for better UX.
 * - Dynamic radio group selection for Loan Type and Purpose.
 * - Credit health monitoring fields (DPD, Delinquency, etc.).
 */
const LoanTerms = () => {
  /* --- STATE MANAGEMENT --- */
  // Highlights the active field container for visual focus
  const [activeField, setActiveField] = useState(null);
  
  // Tracks selected loan category (Secured vs. Unsecured)
  const [loanType, setLoanType] = useState('Secured');
  
  // Tracks the intended use of the loan
  const [loanPurpose, setLoanPurpose] = useState('Personal');

  // Placeholder for financial state (Note: Ensure 'financials' state is passed via props or defined if using onChange)
  const [financials, setFinancials] = useState({ loanAmount: 0, income: 0 });

  /* --- STYLING UTILITIES --- */
  /**
   * getFieldStyle: Generates the container classes based on theme and focus state.
   * Includes a subtle scale-up effect and shadow glow when active.
   */
  const getFieldStyle = (fieldName) => {
    const isActive = activeField === fieldName;
    return `p-6 rounded-2xl border transition-all duration-500 backdrop-blur-xl ${
      isActive
        ? 'border-black/30 dark:border-white/50 bg-white/60 dark:bg-white/10 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]'
        : 'border-black/10 dark:border-white/5 bg-white/20 dark:bg-white/5 opacity-90'
    }`;
  };

  // Standardized input and label classes for a monochromatic aesthetic
  const inputClass = "w-full bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-slate-900 dark:text-white text-lg py-1 transition-all appearance-none placeholder:text-slate-900/30 dark:placeholder:text-white/20";
  const labelClass = "block text-slate-900 dark:text-white text-[10px] font-black mb-2 uppercase tracking-[0.2em] opacity-60";

  return (
    /* --- COMPONENT WRAPPER --- */
    <div className="h-auto min-w-screen w-full md:w-[80%] mx-auto flex justify-center px-4 pt-7 pb-20 md:p-8">
      
      {/* GRID CONTAINER: Responsive column-to-row transition */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-15 items-stretch">
        
        {/* --- LEFT COLUMN: LOAN TERMS --- 
            Focuses on the mechanics of the loan request (Amount, Duration, Purpose).
        */}
        <div className="flex-1 flex flex-col p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500">
          <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-6 md:mb-10 uppercase tracking-[0.3em] border-b border-black/10 dark:border-white/10 pb-4">
            Loan <span className="text-slate-900/30 dark:text-white/30 font-light">Terms</span>
          </h2>

          <div className="space-y-6 flex-grow">
            {/* Sanction Amount Input */}
            <div className={getFieldStyle('sanction')} onFocus={() => setActiveField('sanction')}>
              <label className={labelClass}>Sanction Amount ($)</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="decimal" placeholder="0.00" className={inputClass} />
            </div>

            {/* Requested Tenure */}
            <div className={getFieldStyle('tenure')} onFocus={() => setActiveField('tenure')}>
              <label className={labelClass}>Loan Tenure (Months)</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="Months" className={inputClass} />
            </div>

            {/* Total Duration Info */}
            <div className={getFieldStyle('total')} onFocus={() => setActiveField('total')}>
              <label className={labelClass}>Total Loan Months</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="Months" className={inputClass} />
            </div>

            {/* Loan Type Radio Selector */}
            <div className={getFieldStyle('type')} onFocus={() => setActiveField('type')}>
              <label className={labelClass}>Loan Type</label>
              <div className="mt-4">
                <div className="grid grid-cols-2 sm:flex sm:gap-8 gap-4">
                  {['Secured', 'Unsecured'].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group py-1">
                      <input
                        type="radio"
                        name="loan_type"
                        checked={loanType === type}
                        onChange={() => setLoanType(type)}
                        className="w-5 h-5 sm:w-4 sm:h-4 accent-slate-900 dark:accent-white cursor-pointer"
                      />
                      <span className={`text-slate-900 dark:text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-opacity ${
                        loanType === type ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                      }`}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Loan Purpose Radio Selector */}
            <div className={getFieldStyle('purpose')} onFocus={() => setActiveField('purpose')}>
              <label className={labelClass}>Loan Purpose</label>
              <div className="mt-4">
                <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:gap-6 gap-4">
                  {['Auto', 'Education', 'Home', 'Personal'].map((purpose) => (
                    <label key={purpose} className="flex items-center space-x-3 cursor-pointer group py-1">
                      <input
                        type="radio"
                        name="loan_purpose"
                        checked={loanPurpose === purpose}
                        onChange={() => setLoanPurpose(purpose)}
                        className="w-5 h-5 sm:w-4 sm:h-4 accent-slate-900 dark:accent-white cursor-pointer"
                      />
                      <span className={`text-slate-900 dark:text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-opacity ${
                        loanPurpose === purpose ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                      }`}>
                        {purpose}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: CREDIT HISTORY --- 
            Focuses on historical performance and current banking status.
        */}
        <div className="flex-1 flex flex-col p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500">
          <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-6 md:mb-10 uppercase tracking-[0.3em] border-b border-black/10 dark:border-white/10 pb-4">
            Credit <span className="text-slate-900/30 dark:text-white/30 font-light">History</span>
          </h2>

          <div className="space-y-6 flex-grow">
            {/* Account Volume Monitoring */}
            <div className={getFieldStyle('lti')} onFocus={() => setActiveField('lti')}>
              <label className={labelClass}>Bank Accounts</label>
              <div className="flex flex-col gap-6 mt-4">
                <div>
                  <span className="text-[9px] text-slate-900/40 dark:text-white/40 uppercase font-black tracking-widest block mb-1">Open Accounts</span>
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
                  <span className="text-[9px] text-slate-900/40 dark:text-white/40 uppercase font-black tracking-widest block mb-1">Closed Accounts</span>
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

            {/* Hard Inquiries Counter */}
            <div className={getFieldStyle('enquiry')} onFocus={() => setActiveField('enquiry')}>
              <label className={labelClass}>Enquiry Count</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="0" className={inputClass} />
              <p className="text-[10px] text-slate-900/40 dark:text-white/40 mt-2 italic">Recent credit check requests.</p>
            </div>

            {/* Delinquency History */}
            <div className={getFieldStyle('dp_months')} onFocus={() => setActiveField('dp_months')}>
              <label className={labelClass}>Deliquent Months</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="0" className={inputClass} />
            </div>

            {/* Days Past Due (DPD) Tracking */}
            <div className={getFieldStyle('dpd')} onFocus={() => setActiveField('dpd')}>
              <label className={labelClass}>Total DPD</label>
              <input type="number" onWheel={(e) => e.target.blur()} inputMode="numeric" placeholder="0" className={inputClass} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoanTerms;