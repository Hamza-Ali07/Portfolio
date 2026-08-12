import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from '../hooks/useReducedMotion';

const BASE_URL = import.meta.env.BASE_URL;

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: '01',
    title: 'UGC — Agency',
    category: ' Agency for UGC Content Creation',
    year: '2023-Present',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/ugcAgency.jpg`,
    href: 'https://www.instagram.com/agency_by_hamza'
  },
  {
    id: '02',
    title: 'EDU GATE HUB — Educational Platform',
    category: 'Promotional Video for EDU GATE HUB',
    year: '2026',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/EdugateHub.jpeg`,
    video: `${BASE_URL}assets/client-01.mp4`,
  },
  {
    id: '03',
    title: 'OJIIZ — Verified job & recruitment platform',
    category: 'Promotional Video for OJIIZ',
    year: '2026',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/ojiiz.png`,
    video: `${BASE_URL}assets/client-02.mp4`,
  },
  {
    id: '04',
    title: 'Visa Bridge — Visa Consultancy',
    category: 'Promotional Video for Visa Bridge',
    year: '2026',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/visa-bridge.jpeg`,
    video: `${BASE_URL}assets/client-03.mp4`,
  },
  {
    id: '05',
    title: 'Content Creation — YouTube',
    category: 'Content Creation',
    year: '2021—Present',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/youtube.jpeg`,
    href: 'https://www.youtube.com/@hamzarajputvlogs273',
  },
  {
    id: '06',
    title: 'Content Creation — TikTok',
    category: 'Content Creation',
    year: '2021—Present',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/tiktok.png`,
    href: 'https://www.tiktok.com/@hamzarajputvlogs',
  },
  {
    id: '07',
    title: 'Content Creation — Instagram',
    category: 'Content Creation',
    year: '2021—Present',
    span: 'md:col-span-6',
    height: 'md:h-[400px]',
    image: `${BASE_URL}assets/insta.jpeg`,
    href: 'https://www.instagram.com/hamzaaliofficial07/',
  },
];

const VIDEO_IDS = ['02', '03', '04'];

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const isVideoCard = VIDEO_IDS.includes(project.id) && Boolean(project.video);

  const handleEnter = () => {
    if (!isVideoCard || !videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    videoRef.current.play().catch(() => {});
  };

  const handleMove = (e) => {
    if (reducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(cardRef.current, {
      rotateX: py * -6,
      rotateY: px * 8,
      scale: 1.015,
      duration: 0.5,
      ease: 'power2.out',
      transformPerspective: 900,
    });
  };

  const handleLeave = () => {
    if (isVideoCard && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: 'power3.out',
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={isVideoCard ? handleEnter : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`project-card group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[#F54F1B]/20 bg-[#1E233D] p-7 ${project.span} ${project.height} h-[340px] transition-colors duration-500 hover:border-[#F54F1B]/80 `}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Ambient gradient wash, brightens on hover */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,79,27,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="absolute right-7 top-7 font-mono text-xs text-bone-dim">
        {project.id}
      </span>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover rounded-2xl opacity-100 transition-opacity duration-500 ${
            isVideoCard ? 'group-hover:opacity-0' : ''
          }`}
        />
      )}
      {isVideoCard && (
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          src={project.video}
          muted={false}
          loop
          playsInline
          preload="metadata"
        />
      )}
      <div className={`absolute left-7 right-7 bottom-7 z-10 flex flex-col gap-5 opacity-100 transition-opacity duration-300 ${
        isVideoCard ? 'group-hover:opacity-0' : ''
      }`}>
        <div className="rounded-2xl border border-[#F54F1B]/20 bg-[#1E233D]/40 p-4 backdrop-blur-sm">
          <p className="font-mono-label mb-2 text-[11px] text-[#F54F1B]/80">
            {project.category}
          </p>
          <h3 className="font-display text-3xl text-bone md:text-4xl transition-all duration-300 group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(245,79,27,0.6),0_0_20px_rgba(245,79,27,0.3)]">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-bone-dim">
          <span className="rounded-full border border-line px-2 py-1 bg-[#1E233D]/30">{project.year}</span>
        </div>
        <div className={`flex items-center gap-2 font-mono-label text-[10px] text-bone-dim ${
          isVideoCard ? 'group-hover:text-[#F54F1B]' : ''
        }`}>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              View Project <span>→</span>
            </a>
          ) : project.video ? null : (
            <span className="text-bone/80">Coming Soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGrid() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: reducedMotion ? 0 : 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
            delay: (i % 2) * 0.08,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative mx-auto max-w-[1600px] px-6 pt-28 pb-10 md:px-14 md:pt-40 md:pb-24"
      >
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono-label mb-4 text-xs text-[#F54F1B]/80">My Workings...</p>
            <h2 className="font-display text-display-lg text-bone">
              Recent Projects<span className="text-[#F54F1B]">.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-bone-dim">
            A selection of my most recent work, showcasing a range of projects that highlight my content creation, video production, and creative direction skills. Each project reflects my commitment to delivering high-quality results and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
