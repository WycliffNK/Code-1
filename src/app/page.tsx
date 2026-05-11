import Image from "next/image";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import AssessmentForm from "@/components/AssessmentForm";
import WorkWithMe from "@/components/WorkWithMe";

export default function Home() {
  const stats = [
    { num: "30+", label: "Years experience" },
    { num: "4", label: "Continents" },
    { num: "3", label: "Governments advised" },
    { num: "$M+", label: "Businesses built" },
    { num: "2", label: "Books published" },
  ];

  const pathways = [
    {
      num: "01",
      title: "Individual",
      desc: "Self-discovery, personal brand, and identity. For leaders who sense something needs to change but cannot yet name it.",
    },
    {
      num: "02",
      title: "Sales",
      desc: "Sell from identity and purpose — not pressure and scripts. For sales professionals who want to perform at their highest level.",
    },
    {
      num: "03",
      title: "Organisation",
      desc: "Bespoke leadership and business development programmes for CEOs, MDs, and L&D leaders building high-performance cultures.",
    },
    {
      num: "04",
      title: "Government",
      desc: "Large-scale human capital development for senior public sector leaders and governments investing in national transformation.",
    },
  ];

  const testimonials = [
    {
      badge: "Individual",
      quote:
        "Code 1 didn’t just change how I lead — it changed who I lead as. For the first time in my career, I understand the connection between identity and performance.",
      name: "Sarah Mensah",
      role: "CEO — Alaris Group",
      initial: "S",
    },
    {
      badge: "Organisation",
      quote:
        "We brought Danston in to transform our leadership team. The diagnostic alone was unlike anything we’d experienced — and the results have been sustained for two years.",
      name: "Michael Chen",
      role: "Group MD — Horizon Partners",
      initial: "M",
    },
    {
      badge: "Government",
      quote:
        "Danston brought depth, rigour, and genuine humanity to our national leadership initiative. His work operates at a level that very few practitioners in the world can match.",
      name: "James Nkosi",
      role: "Senior Advisor — Ministry of Human Capital",
      initial: "J",
    },
  ];

  const books = [
    {
      title: "How to Build a Great First Impression",
      desc: "A practical guide to leading with presence. The book that has helped thousands of leaders own every room they walk into — before they speak a single word.",
    },
    {
      title: "Self Identity Matters",
      desc: "The foundational text behind the I Philosophy. A deep exploration of identity, purpose, and why everything you build must start with who you are.",
    },
  ];

  const orgPills = [
    "Corporate Institution",
    "Government Body",
    "National Organisation",
    "University",
    "Development Fund",
  ];

  const aboutTags = [
    "British-African",
    "Business Builder",
    "Leadership Coach",
    "Author",
    "VP × 3",
    "4 Continents",
  ];

  return (
    <>
      <Navbar />

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="bg-navy text-warm-white min-h-screen px-14 pt-[180px] pb-[120px] relative flex items-center max-[820px]:px-6 max-[820px]:pt-[140px] max-[820px]:pb-20 border-b border-gold/30 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08)_0%,transparent_60%)] before:pointer-events-none">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-[1.2fr_1fr] gap-20 items-center max-[820px]:grid-cols-1 max-[820px]:gap-12 relative z-10">
          <div className="max-w-[580px]">
            <RevealOnScroll>
              <h1 className="font-serif text-[clamp(40px,5.5vw,64px)] font-normal leading-[1.05] tracking-tight text-warm-white mb-8">
                Your potential is always the{" "}
                <span className="text-gold">highest priority.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-[19px] text-warm-white/70 leading-relaxed mb-12 max-w-[460px]">
                Leadership development, business transformation, and human
                potential — for leaders, organisations, and governments across
                Africa and beyond.
              </p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={2}>
            <div className="aspect-[4/5] rounded-[1px] overflow-hidden max-[820px]:max-w-[320px]">
              <Image
                src="/danston.jpg"
                alt="Danston Mugarura"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PROBLEM
      ════════════════════════════════════════════════ */}
      <section className="bg-warm-white text-charcoal py-[100px] px-14 max-[820px]:py-20 max-[820px]:px-6">
        <div className="max-w-[720px] mx-auto">
          <RevealOnScroll>
            <div className="w-12 h-[1.5px] bg-gold mb-8" />
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-normal leading-[1.2] tracking-tight text-navy mb-7 max-w-[720px]">
              Most leaders are working incredibly hard — in the wrong direction.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="text-lg leading-loose text-charcoal-soft max-w-[600px] mb-6">
              Effort isn&apos;t the issue. Direction is. Before you can build
              something that lasts, you need clarity on who&apos;s doing the
              building. That&apos;s where Code 1 begins.
            </p>
            <a
              href="#system"
              className="text-[13px] text-navy no-underline border-b border-gold pb-0.5 hover:text-gold transition-colors duration-300"
            >
              Explore the system &rarr;
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CREDIBILITY STATS
      ════════════════════════════════════════════════ */}
      <section className="bg-navy py-20 px-14 max-[820px]:py-14 max-[820px]:px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-5 gap-8 text-center max-[820px]:grid-cols-2 max-[820px]:gap-x-4 max-[820px]:gap-y-8">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i as 0 | 1 | 2 | 3 | 4}>
              <div className="font-serif text-[clamp(36px,4vw,52px)] text-gold font-normal leading-none mb-3.5">
                {stat.num}
              </div>
              <div className="text-[10px] text-warm-white/70 tracking-[2.5px] uppercase leading-normal">
                {stat.label}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PATHWAYS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#f4f1ea] text-charcoal py-[100px] px-14 max-[820px]:py-20 max-[820px]:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <div className="w-12 h-[1.5px] bg-gold mx-auto mb-8" />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-normal leading-[1.2] tracking-tight text-navy mb-4">
                Who do you need to become?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-[16px] text-charcoal-soft leading-relaxed max-w-[560px] mx-auto">
                Code 1 speaks to four distinct audiences — each with its own
                entry point.
              </p>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-4 gap-6 max-[820px]:grid-cols-1">
            {pathways.map((card, i) => (
              <RevealOnScroll key={card.num} delay={i as 0 | 1 | 2 | 3}>
                <a
                  href="#assessment"
                  className="group block bg-white border border-navy/12 p-9 rounded-[1px] no-underline text-inherit hover:translate-y-[-4px] hover:border-gold hover:shadow-[0_12px_32px_rgba(11,31,58,0.06)] transition-all duration-400 relative overflow-hidden h-full"
                >
                  <span className="text-gold font-serif text-[13px] tracking-wider mb-3 block">
                    {card.num}
                  </span>
                  <h3 className="font-serif text-[22px] font-normal text-navy mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-charcoal-soft leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <span className="text-navy text-[14px]">&rarr;</span>
                  {/* Gold bottom bar on hover */}
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SYSTEM
      ════════════════════════════════════════════════ */}
      <section
        id="system"
        className="bg-warm-white text-charcoal py-[100px] px-14 max-[820px]:py-20 max-[820px]:px-6"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="w-12 h-[1.5px] bg-gold mx-auto mb-8" />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-normal leading-[1.15] tracking-tight text-navy mb-6">
                First — who you are.
                <br />
                Then — what you build.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-lg leading-relaxed text-charcoal-soft max-w-[560px] mx-auto">
                Code 1 is a complete leadership and organisational
                transformation system, combining the I Philosophy and the 5D
                Framework with AI-integrated forensic diagnostic technology —
                bespoke to you.
              </p>
            </RevealOnScroll>
          </div>

          {/* Pillars with connector */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 max-w-[800px] mx-auto mb-16 items-center max-[820px]:grid-cols-1 max-[820px]:gap-12 max-[820px]:mb-16">
            <RevealOnScroll>
              <div className="bg-white border border-navy/10 rounded-[1px] p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-navy text-gold font-serif text-[32px] flex items-center justify-center mx-auto mb-7 hover:scale-105 transition-transform duration-400">
                  I
                </div>
                <h3 className="font-serif text-2xl font-normal text-navy mb-5">
                  The I Philosophy
                </h3>
                <div className="text-[17px] text-charcoal-soft leading-[2.2]">
                  Presence
                  <br />
                  Communication
                  <br />
                  Leadership
                </div>
              </div>
            </RevealOnScroll>

            {/* Connector */}
            <div className="flex flex-col items-center max-[820px]:flex-row max-[820px]:justify-center max-[820px]:gap-0">
              <div className="w-[2px] h-16 bg-gradient-to-b from-gold/20 to-gold max-[820px]:w-16 max-[820px]:h-[2px] max-[820px]:bg-gradient-to-r" />
              <div className="w-3 h-3 rounded-full bg-gold my-2 max-[820px]:mx-2 max-[820px]:my-0" />
              <div className="w-[2px] h-16 bg-gradient-to-b from-gold to-gold/20 max-[820px]:w-16 max-[820px]:h-[2px] max-[820px]:bg-gradient-to-r" />
            </div>

            <RevealOnScroll delay={2}>
              <div className="bg-white border border-navy/10 rounded-[1px] p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-navy text-gold font-serif text-[32px] flex items-center justify-center mx-auto mb-7 hover:scale-105 transition-transform duration-400">
                  5D
                </div>
                <h3 className="font-serif text-2xl font-normal text-navy mb-5">
                  The 5D Framework
                </h3>
                <div className="text-[17px] text-charcoal-soft leading-[2.2]">
                  Discover &middot; Diagnose
                  <br />
                  Discuss &middot; Design
                  <br />
                  Deliver
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* AI Technology box */}
        </div>
        <RevealOnScroll>
          <div className="bg-navy py-16 px-14 max-[820px]:py-10 max-[820px]:px-6 mb-16 max-[820px]:mb-16 -mx-14 max-[820px]:-mx-6">
            <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-12 items-start max-[820px]:grid-cols-1 max-[820px]:gap-8">
                <div>
                  <h3 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-warm-white mb-4">
                    AI-Integrated Forensic Diagnostics
                  </h3>
                  <p className="text-[15px] text-warm-white/70 leading-relaxed mb-6">
                    Advanced diagnostic technology that maps behavioural
                    patterns, identity structures, and leadership capacity with
                    precision — giving every engagement a forensic foundation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Behavioural Analysis",
                      "Identity Mapping",
                      "Leadership Profiling",
                      "Predictive Modelling",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[1.5px] uppercase text-gold/80 border border-gold/30 px-3 py-1.5 rounded-[1px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 3C8.477 3 4 7.477 4 13c0 3.5 1.8 6.6 4.5 8.4V24l3-2 3 2v-2.6c2.7-1.8 4.5-4.9 4.5-8.4 0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.2"/><circle cx="10.5" cy="12" r="1.5" fill="currentColor"/><circle cx="17.5" cy="12" r="1.5" fill="currentColor"/><path d="M9 16c1.2 1.6 3 2.5 5 2.5s3.8-.9 5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M8 7c1.5-1 3.5-1.5 6-1.5s4.5.5 6 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/></svg>, label: "Behaviour" },
                    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.2"/><path d="M17 17l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" opacity="0.4"/><path d="M12 7v2M12 15v2M7 12h2M15 12h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/></svg>, label: "Analysis" },
                    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M7 19l4-5 3 3 4-6 3 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="19" r="1.5" fill="currentColor" opacity="0.5"/><circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.5"/><circle cx="14" cy="17" r="1.5" fill="currentColor" opacity="0.5"/><circle cx="18" cy="11" r="1.5" fill="currentColor" opacity="0.5"/><circle cx="21" cy="15" r="1.5" fill="currentColor" opacity="0.5"/></svg>, label: "Reporting" },
                    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.2"/><circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1" opacity="0.4"/><circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1" opacity="0.6"/><circle cx="14" cy="14" r="1.5" fill="currentColor"/><path d="M14 3v3M14 22v3M3 14h3M22 14h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/></svg>, label: "Precision" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-warm-white/[0.06] border border-warm-white/10 rounded-[2px] p-6 text-center"
                    >
                      <div className="text-gold/70 mb-2 flex justify-center">{item.icon}</div>
                      <div className="text-[11px] tracking-[1.5px] uppercase text-warm-white/60">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="max-w-[1100px] mx-auto">
          {/* Pull quote */}
          <RevealOnScroll>
            <div className="max-w-[640px] mx-auto py-10 border-t border-b border-navy/15 text-center">
              <p className="font-serif italic text-[clamp(22px,2.5vw,28px)] leading-snug text-navy font-normal mb-4">
                &ldquo;I don&apos;t fight the fires. I bring in wet logs. As the
                strengths grow, the weaknesses resolve themselves.&rdquo;
              </p>
              <span className="text-[12px] tracking-[1.5px] uppercase text-charcoal-muted">
                — Danston Mugarura
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════════ */}
      <section
        id="about"
        className="relative bg-navy text-warm-white flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/danston.jpg)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />

        <div className="relative z-10 w-full px-14 py-[100px] max-[820px]:px-6 max-[820px]:py-20">
          <div className="max-w-[640px]">
            <RevealOnScroll>
              <div className="w-12 h-[1.5px] bg-gold mb-8" />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-normal leading-[1.15] tracking-tight text-warm-white mb-7">
                My name means the restorer.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-[17px] leading-loose text-warm-white/80 mb-4">
                I&apos;m a British-African business builder, leadership coach,
                sales strategist, and author with over 30 years of experience
                across four continents. I&apos;ve built multimillion-dollar
                businesses, served as Vice President in three major
                organisations, advised three governments, and written two books.
              </p>
              <p className="text-[17px] leading-loose text-warm-white/80 mb-8">
                My surname — Mugarura — means the restorer in my mother tongue.
                Everything I do is the proof of it.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={3}>
              <div className="flex flex-wrap gap-2 mb-10">
                {aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[1.5px] uppercase text-warm-white/70 border border-warm-white/20 px-3 py-1.5 rounded-[1px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#assessment"
                className="inline-block bg-gold text-navy py-4 px-8 rounded-[1px] text-[13px] font-medium tracking-[1px] uppercase no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(201,168,76,0.25)] transition-all duration-300"
              >
                Begin Your Assessment
              </a>
            </RevealOnScroll>
          </div>
        </div>
        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gold/40" />
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════ */}
      <section className="bg-navy text-warm-white py-[100px] px-14 max-[820px]:py-20 max-[820px]:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="w-12 h-[1.5px] bg-gold mx-auto mb-8" />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-normal leading-[1.2] tracking-tight text-warm-white">
                What leaders say.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-14 max-[820px]:grid-cols-1">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i as 0 | 1 | 2}>
                <div className="bg-warm-white/[0.04] border border-warm-white/10 rounded-[2px] p-8 flex flex-col h-full">
                  <span className="text-[10px] tracking-[2px] uppercase text-gold border border-gold/30 px-2.5 py-1 rounded-[1px] self-start mb-6">
                    {t.badge}
                  </span>
                  <p className="font-serif italic text-[17px] text-warm-white/90 leading-relaxed mb-8 flex-1">
                    <span className="text-gold text-[32px] leading-none align-top mr-1">
                      &ldquo;
                    </span>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-warm-white/10">
                    <div className="w-10 h-10 rounded-full bg-gold/20 text-gold font-serif text-[16px] flex items-center justify-center">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-[13px] text-warm-white font-medium">
                        {t.name}
                      </div>
                      <div className="text-[11px] text-warm-white/50">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Organisations bar */}
          <RevealOnScroll>
            <div className="text-center">
              <p className="text-[11px] tracking-[2px] uppercase text-warm-white/40 mb-4">
                Organisations and institutions worked with
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {orgPills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[11px] tracking-[1px] text-warm-white/50 border border-warm-white/15 px-4 py-2 rounded-[1px]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BOOKS
      ════════════════════════════════════════════════ */}
      <section
        id="books"
        className="bg-warm-white text-charcoal py-[100px] px-14 max-[820px]:py-20 max-[820px]:px-6"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <div className="w-12 h-[1.5px] bg-gold mx-auto mb-8" />
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-normal leading-[1.2] tracking-tight text-navy">
                The thinking behind the system.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-2 gap-10 max-[820px]:grid-cols-1">
            {books.map((bk, i) => (
              <RevealOnScroll key={bk.title} delay={i as 0 | 1}>
                <div className="flex gap-8 max-[600px]:flex-col">
                  {/* Book cover */}
                  <div className="w-[180px] min-w-[180px] max-[600px]:w-[140px] max-[600px]:min-w-[140px]">
                    <div className="aspect-[3/4] bg-navy rounded-[2px] flex flex-col overflow-hidden">
                      <div className="h-[4px] bg-gold" />
                      <div className="flex-1 flex flex-col justify-center items-center px-4 text-center">
                        <div className="font-serif text-[15px] text-warm-white leading-snug mb-2">
                          {bk.title}
                        </div>
                        <div className="text-[9px] tracking-[1.5px] uppercase text-warm-white/50">
                          Danston Mugarura
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Book body */}
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-normal text-navy mb-4">
                      {bk.title}
                    </h3>
                    <p className="text-[15px] text-charcoal-soft leading-relaxed mb-6">
                      {bk.desc}
                    </p>
                    <a
                      href="#assessment"
                      className="text-[12px] tracking-[1px] uppercase text-navy font-medium no-underline border-b border-gold pb-0.5 hover:text-gold transition-colors duration-300"
                    >
                      Learn more &rarr;
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WORK WITH ME
      ════════════════════════════════════════════════ */}
      <WorkWithMe />

      {/* ════════════════════════════════════════════════
          ASSESSMENT
      ════════════════════════════════════════════════ */}
      <section
        id="assessment"
        className="bg-navy text-warm-white py-[100px] px-14 max-[820px]:py-20 max-[820px]:px-6"
      >
        <RevealOnScroll>
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="w-12 h-[1.5px] bg-gold mx-auto mb-8" />
            <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-normal leading-[1.15] tracking-tight mb-6">
              Is Code 1 right for you?
            </h2>
            <p className="text-lg leading-relaxed text-warm-white/70">
              Ten questions. Under ten minutes. Free. Reviewed personally by
              Danston or the Code 1 team within 48 hours.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <AssessmentForm />
        </RevealOnScroll>

        <p className="text-center text-[11px] text-warm-white/50 mt-7 tracking-[1px]">
          Private and confidential.
        </p>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="bg-navy-deep text-warm-white/60 py-16 px-14 border-t border-gold/15 max-[820px]:px-6">
        <div className="max-w-[1100px] mx-auto">
          {/* 3-column grid */}
          <div className="grid grid-cols-3 gap-12 mb-12 max-[820px]:grid-cols-1 max-[820px]:gap-8 max-[820px]:text-center">
            {/* Brand */}
            <div>
              <Image src="/logo-gold.svg" alt="Code 1" width={120} height={26} className="h-[26px] w-auto mb-4" />
              <p className="text-[13px] text-warm-white/40 leading-relaxed">
                Leadership development, business transformation, and human
                potential.
              </p>
            </div>
            {/* Navigate */}
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-warm-white/40 mb-4">
                Navigate
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "System", href: "#system" },
                  { label: "Work", href: "#work" },
                  { label: "Books", href: "#books" },
                  { label: "Assessment", href: "#assessment" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-warm-white/55 no-underline hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-warm-white/40 mb-4">
                Contact
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hello@code1.com"
                  className="text-[13px] text-warm-white/55 no-underline hover:text-gold transition-colors duration-300"
                >
                  hello@code1.com
                </a>
                <a
                  href="#"
                  className="text-[13px] text-warm-white/55 no-underline hover:text-gold transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-warm-white/10 flex justify-between items-center flex-wrap gap-4 max-[820px]:flex-col max-[820px]:text-center">
            <div className="text-[12px] text-warm-white/40">
              &copy; {new Date().getFullYear()} Code 1. All rights reserved.
            </div>
            <div className="font-serif text-[13px] text-warm-white/30">
              Because your potential is always the highest priority.
            </div>
            <div className="flex gap-6 text-[12px]">
              <a
                href="#"
                className="text-warm-white/40 no-underline hover:text-gold transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-warm-white/40 no-underline hover:text-gold transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-warm-white/40 no-underline hover:text-gold transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
