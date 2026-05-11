"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import EnquiryModal from "./EnquiryModal";

interface Programme {
  name: string;
  duration: string;
  desc: string;
}

interface AudienceGroup {
  num: string;
  title: string;
  programmes: Programme[];
}

const AUDIENCES: AudienceGroup[] = [
  {
    num: "01",
    title: "For Individuals",
    programmes: [
      {
        name: "Self Discovery Programme",
        duration: "90 Days",
        desc: "A complete identity and leadership foundation built around the I Philosophy.",
      },
      {
        name: "Personal Brand Mastery",
        duration: "60 Days",
        desc: "Craft a personal brand rooted in who you are — not what you do.",
      },
      {
        name: "Self Identity Intensive",
        duration: "30 Days",
        desc: "A focused deep-dive into self-awareness, values, and personal clarity.",
      },
    ],
  },
  {
    num: "02",
    title: "For Sales Professionals",
    programmes: [
      {
        name: "Sales Mastery Programme",
        duration: "90 Days",
        desc: "Sell from identity and purpose. Build trust before you build pipeline.",
      },
      {
        name: "Sales Leadership Intensive",
        duration: "60 Days",
        desc: "Lead sales teams with clarity, presence, and a system that scales.",
      },
    ],
  },
  {
    num: "03",
    title: "For Organisations",
    programmes: [
      {
        name: "Leadership Development Programme",
        duration: "90–180 Days",
        desc: "Bespoke leadership transformation for senior teams and high-potential leaders.",
      },
      {
        name: "Business Development Accelerator",
        duration: "6–12 Months",
        desc: "Revenue growth strategy rooted in identity, culture, and capability.",
      },
      {
        name: "Organisational Culture Reset",
        duration: "90 Days",
        desc: "Diagnose and redesign the cultural operating system of your organisation.",
      },
    ],
  },
  {
    num: "04",
    title: "For Governments & National Bodies",
    programmes: [
      {
        name: "National Leadership Development Initiative",
        duration: "Bespoke",
        desc: "Large-scale leadership capability building for governments and public institutions.",
      },
      {
        name: "Youth Leadership & Enterprise Programme",
        duration: "Bespoke",
        desc: "Developing the next generation of national leaders and entrepreneurs.",
      },
      {
        name: "Code 1 Online Academy",
        duration: "Self-paced",
        desc: "Digital access to the Code 1 system for individuals and teams worldwide.",
      },
    ],
  },
];

export default function WorkWithMe() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="work"
        className="bg-[#f4f1ea] text-charcoal py-[140px] px-14 max-[820px]:py-20 max-[820px]:px-6"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20">
            <RevealOnScroll>
              <div className="w-12 h-[1.5px] bg-gold mx-auto mb-8" />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-normal leading-[1.15] tracking-tight text-navy mb-6">
                There is no standard package here.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-lg leading-relaxed text-charcoal-soft max-w-[640px] mx-auto">
                There is only what is right for you. Every engagement begins
                with a diagnostic — because the work must fit the person, not
                the other way around.
              </p>
            </RevealOnScroll>
          </div>

          {AUDIENCES.map((group) => (
            <div key={group.num} className="mb-20 last:mb-0">
              <RevealOnScroll>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gold font-serif text-[14px] tracking-wider">
                    {group.num}
                  </span>
                  <h3 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy">
                    {group.title}
                  </h3>
                </div>
                <div className="w-full h-px bg-navy/10 mb-10" />
              </RevealOnScroll>

              <div
                className={`grid gap-6 ${
                  group.programmes.length === 2
                    ? "grid-cols-2 max-[820px]:grid-cols-1"
                    : "grid-cols-3 max-[820px]:grid-cols-1"
                }`}
              >
                {group.programmes.map((prog, pi) => (
                  <RevealOnScroll
                    key={prog.name}
                    delay={Math.min(pi, 4) as 0 | 1 | 2 | 3 | 4}
                  >
                    <div className="bg-white border border-navy/10 p-8 rounded-[1px] flex flex-col h-full">
                      <h4 className="font-serif text-[20px] font-normal text-navy mb-2">
                        {prog.name}
                      </h4>
                      <div className="text-[11px] text-gold tracking-[2px] uppercase mb-4">
                        {prog.duration}
                      </div>
                      <p className="text-[14px] text-charcoal-soft leading-relaxed mb-6 flex-1">
                        {prog.desc}
                      </p>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="text-[12px] tracking-[1px] uppercase text-navy font-medium bg-transparent border-none cursor-pointer p-0 text-left hover:text-gold transition-colors duration-300 font-sans"
                      >
                        Enquire &rarr;
                      </button>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ))}

          <RevealOnScroll>
            <div className="text-center mt-20 pt-16 border-t border-navy/10">
              <p className="font-serif text-[20px] text-navy mb-6">
                Not sure where to start? Let the assessment guide you.
              </p>
              <a
                href="#assessment"
                className="inline-block bg-gold text-navy py-4 px-8 rounded-[1px] text-[13px] font-medium tracking-[1px] uppercase no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(201,168,76,0.25)] transition-all duration-300"
              >
                Begin Your Assessment
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
