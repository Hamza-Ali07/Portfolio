import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from '../hooks/useReducedMotion';

const SKILLS = [
  {
    label: 'Digital Marketing',
    iconUrl: `${import.meta.env.BASE_URL}assets/Digital Marketing.jpeg`,
  },
  {
    label: 'Influencer Marketing',
    iconUrl: `${import.meta.env.BASE_URL}assets/influencing.jpeg`,
  },
  {
    label: 'Social Media Management',
    iconUrl: `${import.meta.env.BASE_URL}assets/content.jpeg`,
  },
  {
    label: 'PR Management',
    iconUrl: `${import.meta.env.BASE_URL}assets/PRManage.jpeg`,
  },
  {
    label: 'Content Creation',
    iconUrl: `${import.meta.env.BASE_URL}assets/contentCreating.jpeg`,
  },
  {
    label: 'Content Strategy',
    iconUrl: `${import.meta.env.BASE_URL}assets/contentMarketing.jpeg`,
  },
  {
    label: 'Social Media Marketing',
    iconUrl: `${import.meta.env.BASE_URL}assets/socialMedia.jpeg`,
  },
  {
    label: 'Brand Promotion',
    iconUrl: `${import.meta.env.BASE_URL}assets/BrandMarketing.jpeg`,
  },
  {
    label: 'Market Research',
    iconUrl: `${import.meta.env.BASE_URL}assets/MarketResearch.jpeg`,
  },
  {
    label: 'Video Editing',
    iconUrl: `${import.meta.env.BASE_URL}assets/Editing.jpeg`,
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1600px] px-6 pt-28 pb-10 md:px-14 md:pt-20 md:pb-10"
    >
      <div className="rounded-[2rem] border border-[#F54F1B]/20 bg-[#1E233D]/70 p-8 backdrop-blur-xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono-label mb-4 text-xs text-[#F54F1B]/80 width-max-content">Skills</p>
            <h3 className="font-display text-display-lg text-bone">
              Core Skills<span className="text-[#F54F1B]">.</span>
            </h3>
          </div>
          <p className="max-w-xl font-mono text-xs leading-relaxed text-bone-dim">
            I have a diverse skill set that spans across various domains, including digital marketing,video editing, brand promotion and designing. My expertise lies in creating impactful strategies, developing creative-content, and crafting visually appealing designs that resonate with audiences. I am constantly learning and adapting to new technologies and trends to stay ahead in the ever-evolving digital landscape.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.label}
              className="rounded-2xl border border-[#F54F1B]/40 bg-[#1E233D] px-5 py-4 text-sm font-medium text-bone transition hover:border-[#F54F1B] hover:bg-[#25294D]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={skill.iconUrl}
                  alt={`${skill.label} logo`}
                  className="h-10 w-10 rounded-lg border border-[#F54F1B]/40 object-contain"
                  loading="lazy"
                />
                <span>{skill.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
