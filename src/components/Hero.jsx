import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from '../hooks/useReducedMotion';
import profilePic from './pfp.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: reducedMotion ? 0.4 : 1.4,
          ease: 'power4.out',
          stagger: 0.12,
          delay: 0.2,
        }
      );

      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.9 }
      );

      if (!reducedMotion && window.matchMedia('(min-width: 768px)').matches) {
        gsap.to('.hero-copy', {
          yPercent: -30,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '80% top',
            scrub: 0.6,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-auto w-full overflow-hidden bg-[#1E233D] pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(245,79,27,0.10),transparent_55%)]" />

      <div className="relative z-10 mx-auto grid mt-10 max-w-[1600px] grid-cols-1 items-center gap-6 px-4 pt-16 sm:px-6 md:mt-[4.5rem] md:grid-cols-2 md:gap-8 md:px-14 md:pt-0">
        
        <div className="hero-copy order-2 md:order-1">
          {/*
            Responsive heading notes:
            - xs / mobile: adjust `xs:text-[..]` to shrink for very small widths
            - sm / small phones: `sm:text-[..]`
            - md / tablets: `md:text-[..]`
            - lg / xl: desktop sizes
            To keep words on one line, use `whitespace-nowrap` on the specific word
            or reduce the xs font-size value below.
          */}
          <h1
            ref={headlineRef}
            className="top-5 -mt-4 font-display font-medium text-[12vw] leading-[1.15] tracking-tightest text-[#F54F1B] uppercase xs:text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[9vw] xl:text-[10vw] break-words"
          >
            <span className="block overflow-visible xs:flex flex-shrink-0 text-auto">
              {/* Keep this word on one line: `inline-block` + `whitespace-nowrap`. If it overflows,
                  reduce `xs:text-[10vw]` or `sm:text-[11vw]` here. */}
             <span className="block overflow-visible xs:overflow-hidden">
              <span className="hero-line block whitespace-nowrap text-transparent [-webkit-text-stroke:2px_#F54F1B] bg-gradient-to-r from-[#F54F1B] to-[#F54F1B] bg-[length:0%_100%] bg-no-repeat bg-left transition-[background-size] duration-500 hover:bg-[length:100%_100%] bg-clip-text">HAMZA&nbsp;&nbsp;ALI</span>
             </span>
            </span>  
          </h1>

          <p
            ref={subRef}
            className="mt-4 max-w-sm font-mono text-[11px] leading-relaxed text-bone-dim xs:text-xs"
          >
            Amid glowing monitor lights. I, "Hamza Ali", a digital merchant curates product pages by day, then transforms raw footage into cinematic stories by night. Seamlessly blending sales strategy with creative flow, they slice clips and color-grade frames for YouTube vlogs, turning everyday life and online hustle into a single, vibrant digital journey.
            </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 xs:gap-6">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 border border-line px-4 py-2 font-mono-label text-[15px] text-bone transition-colors duration-300 hover:border-[#F54F1B] hover:text-[#F54F1B] xs:px-5 xs:py-2.5 xs:text-xs"
            >
              View Work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="font-mono text-[12px] text-bone-dim xs:text-xs">
              Scroll to explore ↓
            </span>
          </div>
        </div>

        <div className="relative order-1 w-full max-w-[28rem] justify-self-center overflow-hidden rounded-[1.5rem] border border-[#F54F1B]/20 bg-[#1E233D] transition-shadow duration-500 hover:shadow-[0_30px_140px_rgba(245,79,27,0.14)] xs:max-w-[28rem] xs:rounded-[2rem] md:order-2 md:max-w-[30rem]">
          {/* Avatar/container sizing:
              - mobile: `h-[70vh]` gives tall crop on phones
              - md (tablet/laptop): `md:h-[87vh]` larger
              Adjust these `h-[..]` values inside the image wrapper below to change crop. */}
          <div className="absolute inset-0 border-[1px] border-[#F54F1B]/10" />
          <div className="relative flex items-center justify-center p-3 xs:p-4 md:p-6">
          <div className="group relative w-full overflow-hidden rounded-[1.25rem] border border-[#F54F1B]/30 bg-[#1E233D]/10 shadow-[0_30px_80px_rgba(245,79,27,0.18)] transition-transform duration-500 hover:-translate-y-1 xs:rounded-[2rem] flex flex-col h-auto md:h-auto lg:h-auto xl:h-auto">
                <div className="overflow-hidden h-[80%]">
                    <img
                      src={profilePic}
                      alt="Muhammad Ali Abeer Khan"
                      className="w-full h-full object-cover object-[70%_10%] md:object-[45%_20%]"
                    />
                  </div>
                  <div className="border-t border-line/70 bg-[#1E233D]/90 px-4 py-3 xs:px-5 xs:py-4">
                <p className="text-[10px] uppercase tracking-[0.1em] text-bone-dim font-mono-label xs:text-xs">
                  Hamza Ali <span className="text-[#F54F1B]">—</span> A Professional Content Creator <span className="text-[#F54F1B]">.</span>
                </p>
                <h2 className="mt-1 text-base font-semibold tracking-tight text-bone sm:text-xl md:mt-2">
                  Content Creator  <span className="text-[#F54F1B]">|</span>  Digital Marketer  <span className="text-[#F54F1B]">|</span>  Influencer<span className="text-[#F54F1B]">&nbsp;.</span>
                </h2>
                <p className="mt-1 text-[11px] leading-relaxed text-bone-dim xs:mt-2 xs:text-xs">
                  Began content creation in 2021, accumulating 5 years of experience. Active on YouTube, Instagram, Facebook, and TikTok with over 10K YouTube subscribers. Collaborated with 50+ brands in various sectors. Skilled in storytelling, scripting, video production, and social media content. Launched a UGC Content Creation Agency, successfully managing communication, campaigns, and project execution for 10–15+ brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-line py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono-label text-[10px] text-bone-dim">
          {Array.from({ length: 2}).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>DIGITAL MARKETING</span>
              <span>·</span>  
              <span>INFLUENCER MARKETING</span>
              <span>·</span>
              <span>CONTENT CREATION</span>
              <span>·</span>
              <span>BRAND PROMOTION</span>
              <span>·</span>
              <span>PR MANAGEMENT</span>
              <span>·</span>
              <span>SOCIAL MEDIA MARKETING</span>
              <span>.</span>
              <span>VIDEO EDITING</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
