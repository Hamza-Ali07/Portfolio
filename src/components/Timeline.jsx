import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
   {
    phase: 'Started Content Creation',
    period: '2021-Present',
    detail:
      'I began my content creation journey in 2021, experimenting with video creation, storytelling, and social media.',
  },
   {
    phase: 'Built My Social Presence',
    period: '2021–2023',
    detail:
      'I started building and managing my presence across YouTube, Instagram, Facebook, and TikTok, consistently creating and publishing content.',
  },
   {
    phase: 'Expanded My Skills',
    period: '2023–2025',
    detail:
    'As my experience grew, I worked with multiple brands and explored different content categories, including food, restaurants, travel, lifestyle, products, fashion, and UGC. During this period, I also developed skills in video editing, scripting, thumbnails, social media management, analytics, content strategy, and brand promotion.',
  },
  {
    phase: 'Digital Marketing Certification',
    period: '2023-2025',
    detail:
      'To strengthen my understanding of the business and marketing side of content, I completed a Digital Marketing Certification from Aptech.',
  },
  {
    phase: 'Launched UGC Content Creation Agency',
    period: '2023-Present',
    detail: 'After developing experience as a creator and gaining digital marketing knowledge, I launched my own UGC Content Creation Agency. Agency Growth: I have successfully worked with 10–15+ brands through my agency, helping them create UGC content, video advertisements, and social media campaigns.',
  },
  {
    phase: 'Current Progress of Content Creation and UGC Agency',
    period: '2021-Present',
    detail: 'Started my content creation journey in 2021 and have built around 5 years of experience. I create content across YouTube, Instagram, Facebook, and TikTok, with 10K+ YouTube subscribers. Worked with 50+ brands across food, restaurants, travel, lifestyle, products, fashion, and UGC. Experienced in storytelling, scripting, video creation, editing, thumbnails, and social media content.',
  },
  {
    phase: 'University Journey',
    period: '2026',
    detail: 'I have now started my university journey at IoBM, pursuing Accounting & Finance (ACF) while continuing to manage my agency and create content alongside my studies. Today, I continue to work as a Content Creator and Agency Founder, combining creativity, digital marketing, business knowledge, and practical industry experience.',

  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line fills as the section scrolls through view
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        );
      }

      gsap.utils.toArray('.timeline-row').forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: reducedMotion ? 0 : 40, scale: reducedMotion ? 1 : 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 82%',
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative mx-auto max-w-[1200px] px-6 py-28 md:px-14 md:py-40"
    >
      <p className="font-mono-label mb-4 text-xs text-[#F54F1B]/80">Trajectory</p>
      <h2 className="mb-20 font-display text-display-lg text-bone">
        My Journey<span className="text-[#F54F1B]">.</span>
      </h2>

      <div className="relative pl-10 md:pl-16">
        {/* Track + animated progress fill */}
        <div className="absolute left-0 top-0 h-full w-px bg-line md:left-0" />
        <div
          ref={lineRef}
          className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#F54F1B] to-[#F54F1B] md:left-0"
        />

        <div className="flex flex-col gap-16 md:gap-24">
          {STAGES.map((stage) => (
            <div key={stage.phase} className="timeline-row relative">
              <span className="absolute -left-[42px] top-1 h-2.5 w-2.5 rounded-full bg-[#F54F1B] md:-left-[66px]" />
              <p className="font-mono-label mb-2 text-[10px] text-bone-dim">
                {stage.period}
              </p>
              <h3 className="font-display text-2xl text-bone md:text-3xl">
                {stage.phase}
              </h3>
              <p className="mt-3 max-w-lg font-mono text-sm leading-relaxed text-bone-dim">
                {stage.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
