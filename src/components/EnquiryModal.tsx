"use client";

import { useState } from "react";

export default function EnquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", organisation: "", message: "" });
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/80 backdrop-blur-[8px]"
      onClick={handleClose}
    >
      <div
        className="bg-warm-white rounded-[2px] w-full max-w-[540px] mx-4 p-10 max-[820px]:p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-charcoal-muted hover:text-navy text-xl bg-transparent border-none cursor-pointer leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <h3 className="font-serif text-[28px] text-navy mb-2">Enquire</h3>
            <p className="text-sm text-charcoal-soft mb-8">
              Tell us a little about yourself and we&apos;ll be in touch within
              48 hours.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-navy/15 rounded-[2px] py-3 px-4 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 bg-transparent"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-navy/15 rounded-[2px] py-3 px-4 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 bg-transparent"
              />
              <input
                type="text"
                placeholder="Organisation (optional)"
                value={form.organisation}
                onChange={(e) =>
                  setForm({ ...form, organisation: e.target.value })
                }
                className="w-full border border-navy/15 rounded-[2px] py-3 px-4 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 bg-transparent"
              />
              <textarea
                placeholder="Your message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-navy/15 rounded-[2px] py-3 px-4 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 bg-transparent min-h-[100px] resize-y"
              />
              <button
                type="submit"
                className="bg-gold text-navy py-3.5 px-8 rounded-[1px] text-[13px] font-medium tracking-[1px] uppercase font-sans border-none cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(201,168,76,0.25)] transition-all duration-300 mt-2"
              >
                Send Enquiry
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="font-serif text-[28px] text-gold mb-4">
              Thank you.
            </h3>
            <p className="text-[15px] text-charcoal-soft leading-relaxed">
              Your enquiry has been received. We&apos;ll be in touch within 48
              hours.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 bg-navy text-warm-white py-3 px-8 rounded-[1px] text-[13px] font-medium tracking-[1px] uppercase font-sans border-none cursor-pointer hover:translate-y-[-2px] transition-all duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
