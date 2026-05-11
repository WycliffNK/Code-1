"use client";

import { useState } from "react";

const TOTAL_STEPS = 10;

export default function AssessmentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const select = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const goTo = (step: number) => setCurrentStep(step);

  const progressSegments = Array.from({ length: TOTAL_STEPS }, (_, i) => (
    <div
      key={i}
      className={`flex-1 h-[3px] rounded-[2px] transition-colors duration-500 ${
        i < currentStep ? "bg-gold" : "bg-warm-white/15"
      }`}
    />
  ));

  return (
    <div className="bg-warm-white/[0.03] border border-gold/30 rounded-[4px] p-14 max-w-[640px] mx-auto max-[820px]:p-6">
      <div className="flex gap-1 mb-7">{progressSegments}</div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className="form-step active">
          <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
            Question 1 of 10
          </div>
          <div className="font-serif text-2xl text-warm-white mb-8">
            Who are you?
          </div>
          <div className="grid grid-cols-2 gap-3 mb-8 max-[820px]:grid-cols-1">
            {["Individual", "Sales Professional", "Organisation", "Government"].map(
              (opt) => (
                <button
                  key={opt}
                  onClick={() => select("audience", opt)}
                  className={`bg-warm-white/[0.04] border border-warm-white/20 py-4 px-5 rounded-[2px] text-[13px] text-warm-white text-left font-sans transition-all duration-300 hover:border-gold hover:bg-gold/[0.08] cursor-pointer ${
                    answers.audience === opt
                      ? "!border-gold !bg-gold/15 !text-gold"
                      : ""
                  }`}
                >
                  {opt}
                </button>
              )
            )}
          </div>
          <div className="flex justify-end">
            <button
              disabled={!answers.audience}
              onClick={() => goTo(2)}
              className="bg-gold text-navy border-none py-3.5 px-9 rounded-[2px] text-[13px] font-medium tracking-[1px] uppercase font-sans ml-auto cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(201,168,76,0.25)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Steps 2-6: Text questions */}
      {[
        { step: 2, q: "What is your single biggest challenge right now?", key: "challenge", type: "textarea", placeholder: "In your own words..." },
        { step: 3, q: "How long has this been a challenge?", key: "duration", type: "input", placeholder: "Months, years..." },
        { step: 4, q: "What have you already tried?", key: "tried", type: "textarea", placeholder: "Programmes, coaches, books, courses..." },
        { step: 5, q: "What does success look like for you in 12 months?", key: "success", type: "textarea", placeholder: "Be as specific as you can..." },
        { step: 6, q: "What is the cost of this challenge continuing?", key: "cost", type: "textarea", placeholder: "Financial, personal, organisational..." },
      ].map(
        ({ step, q, key, type, placeholder }) =>
          currentStep === step && (
            <div key={step} className="form-step active">
              <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
                Question {step} of 10
              </div>
              <div className="font-serif text-2xl text-warm-white mb-8">{q}</div>
              {type === "textarea" ? (
                <textarea
                  className="w-full bg-warm-white/[0.04] border border-warm-white/20 rounded-[2px] py-4 px-5 text-warm-white text-sm font-sans mb-8 min-h-[120px] resize-y leading-relaxed focus:outline-none focus:border-gold focus:bg-gold/[0.06] placeholder:text-warm-white/40 transition-all duration-300"
                  placeholder={placeholder}
                  value={answers[key] || ""}
                  onChange={(e) => select(key, e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="w-full bg-warm-white/[0.04] border border-warm-white/20 rounded-[2px] py-4 px-5 text-warm-white text-sm font-sans mb-8 focus:outline-none focus:border-gold focus:bg-gold/[0.06] placeholder:text-warm-white/40 transition-all duration-300"
                  placeholder={placeholder}
                  value={answers[key] || ""}
                  onChange={(e) => select(key, e.target.value)}
                />
              )}
              <div className="flex justify-between items-center gap-4">
                <button
                  onClick={() => goTo(step - 1)}
                  className="bg-transparent text-warm-white/60 border-none text-xs tracking-[1px] uppercase font-sans py-2.5 cursor-pointer hover:text-warm-white transition-colors duration-300"
                >
                  ← Back
                </button>
                <button
                  onClick={() => goTo(step + 1)}
                  className="bg-gold text-navy border-none py-3.5 px-9 rounded-[2px] text-[13px] font-medium tracking-[1px] uppercase font-sans ml-auto cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(201,168,76,0.25)] transition-all duration-300"
                >
                  Continue →
                </button>
              </div>
            </div>
          )
      )}

      {/* Step 7: Commitment scale */}
      {currentStep === 7 && (
        <div className="form-step active">
          <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
            Question 7 of 10
          </div>
          <div className="font-serif text-2xl text-warm-white mb-8">
            How committed are you to addressing this now?
          </div>
          <div className="grid grid-cols-10 gap-1.5 mb-8 max-[820px]:grid-cols-5">
            {Array.from({ length: 10 }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => select("commitment", String(i + 1))}
                className={`bg-warm-white/[0.04] border border-warm-white/20 py-3.5 rounded-[2px] text-[13px] text-warm-white text-center font-sans cursor-pointer transition-all duration-300 hover:border-gold ${
                  answers.commitment === String(i + 1)
                    ? "!border-gold !bg-gold !text-navy"
                    : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => goTo(6)}
              className="bg-transparent text-warm-white/60 border-none text-xs tracking-[1px] uppercase font-sans py-2.5 cursor-pointer hover:text-warm-white transition-colors duration-300"
            >
              ← Back
            </button>
            <button
              disabled={!answers.commitment}
              onClick={() => goTo(8)}
              className="bg-gold text-navy border-none py-3.5 px-9 rounded-[2px] text-[13px] font-medium tracking-[1px] uppercase font-sans ml-auto cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(201,168,76,0.25)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 8: Work preference */}
      {currentStep === 8 && (
        <div className="form-step active">
          <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
            Question 8 of 10
          </div>
          <div className="font-serif text-2xl text-warm-white mb-8">
            How do you prefer to work?
          </div>
          <div className="grid grid-cols-2 gap-3 mb-8 max-[820px]:grid-cols-1">
            {["Remote", "On-site", "Both"].map((opt) => (
              <button
                key={opt}
                onClick={() => select("workStyle", opt)}
                className={`bg-warm-white/[0.04] border border-warm-white/20 py-4 px-5 rounded-[2px] text-[13px] text-warm-white text-left font-sans transition-all duration-300 hover:border-gold hover:bg-gold/[0.08] cursor-pointer ${
                  answers.workStyle === opt
                    ? "!border-gold !bg-gold/15 !text-gold"
                    : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => goTo(7)}
              className="bg-transparent text-warm-white/60 border-none text-xs tracking-[1px] uppercase font-sans py-2.5 cursor-pointer hover:text-warm-white transition-colors duration-300"
            >
              ← Back
            </button>
            <button
              disabled={!answers.workStyle}
              onClick={() => goTo(9)}
              className="bg-gold text-navy border-none py-3.5 px-9 rounded-[2px] text-[13px] font-medium tracking-[1px] uppercase font-sans ml-auto cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(201,168,76,0.25)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 9 */}
      {currentStep === 9 && (
        <div className="form-step active">
          <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
            Question 9 of 10
          </div>
          <div className="font-serif text-2xl text-warm-white mb-8">
            How did you find Code 1?
          </div>
          <input
            type="text"
            className="w-full bg-warm-white/[0.04] border border-warm-white/20 rounded-[2px] py-4 px-5 text-warm-white text-sm font-sans mb-8 focus:outline-none focus:border-gold focus:bg-gold/[0.06] placeholder:text-warm-white/40 transition-all duration-300"
            placeholder="Referral, search, social, event..."
            value={answers.source || ""}
            onChange={(e) => select("source", e.target.value)}
          />
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => goTo(8)}
              className="bg-transparent text-warm-white/60 border-none text-xs tracking-[1px] uppercase font-sans py-2.5 cursor-pointer hover:text-warm-white transition-colors duration-300"
            >
              ← Back
            </button>
            <button
              onClick={() => goTo(10)}
              className="bg-gold text-navy border-none py-3.5 px-9 rounded-[2px] text-[13px] font-medium tracking-[1px] uppercase font-sans ml-auto cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(201,168,76,0.25)] transition-all duration-300"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 10: Final */}
      {currentStep === 10 && (
        <div className="form-step active">
          <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
            Question 10 of 10
          </div>
          <div className="font-serif text-2xl text-warm-white mb-8">
            What would you like to happen next?
          </div>
          <textarea
            className="w-full bg-warm-white/[0.04] border border-warm-white/20 rounded-[2px] py-4 px-5 text-warm-white text-sm font-sans mb-2 min-h-[120px] resize-y leading-relaxed focus:outline-none focus:border-gold focus:bg-gold/[0.06] placeholder:text-warm-white/40 transition-all duration-300"
            placeholder="A conversation, a proposal, more information..."
            value={answers.nextSteps || ""}
            onChange={(e) => select("nextSteps", e.target.value)}
          />
          <input
            type="email"
            className="w-full bg-warm-white/[0.04] border border-warm-white/20 rounded-[2px] py-4 px-5 text-warm-white text-sm font-sans mb-8 focus:outline-none focus:border-gold focus:bg-gold/[0.06] placeholder:text-warm-white/40 transition-all duration-300"
            placeholder="Your email address"
            value={answers.email || ""}
            onChange={(e) => select("email", e.target.value)}
          />
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => goTo(9)}
              className="bg-transparent text-warm-white/60 border-none text-xs tracking-[1px] uppercase font-sans py-2.5 cursor-pointer hover:text-warm-white transition-colors duration-300"
            >
              ← Back
            </button>
            <button
              onClick={() => goTo(11)}
              className="bg-gold text-navy border-none py-3.5 px-9 rounded-[2px] text-[13px] font-medium tracking-[1px] uppercase font-sans ml-auto cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(201,168,76,0.25)] transition-all duration-300"
            >
              Submit assessment
            </button>
          </div>
        </div>
      )}

      {/* Success */}
      {currentStep === 11 && (
        <div className="text-center py-10">
          <h3 className="font-serif text-[32px] font-normal text-gold mb-5">
            Thank you.
          </h3>
          <p className="text-[17px] text-warm-white/80 leading-relaxed max-w-[480px] mx-auto">
            Your assessment has been received. Danston or a member of the Code 1
            team will respond personally within 48 hours.
          </p>
        </div>
      )}
    </div>
  );
}
