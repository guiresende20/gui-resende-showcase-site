import { useState, useEffect, useRef, useCallback } from "react";

/* ─── project data ─── */
const PROJECTS = [
  {
    id: 1,
    title: "Tecnopuc Experience",
    subtitle: "Evento de inovação",
    year: "2025",
    category: "design",
    tags: ["UX/UI", "Evento", "App"],
    description: "Organização completa: conteúdo, credenciamento, experiência do participante e desenvolvimento do app.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    color: "#00ff87",
  },
  {
    id: 2,
    title: "Hub Santa Rosa",
    subtitle: "Mapeamento estratégico",
    year: "2024",
    category: "pesquisa",
    tags: ["Pesquisa", "Inovação", "Estratégia"],
    description: "Reverse pitch, roteiros de entrevista e documentação de implementação para o Hub de Inovação.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    color: "#4d8cff",
  },
  {
    id: 3,
    title: "Mascote CriaLab",
    subtitle: "Identidade visual",
    year: "2024",
    category: "design",
    tags: ["Branding", "Ilustração", "3D"],
    description: "Criação do mascote institucional do CriaLab com desdobramentos em materiais digitais e impressos.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    color: "#ff6b9d",
  },
  {
    id: 4,
    title: "FAMECOS × Tecnopuc",
    subtitle: "Proposta de parceria",
    year: "2024",
    category: "pesquisa",
    tags: ["Cultura", "Tecnologia", "Academia"],
    description: "Integração entre tecnologia e arte com estrutura semestral, financiamento via incentivo cultural.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    color: "#ffa726",
  },
  {
    id: 5,
    title: "Internacionalização PUC",
    subtitle: "Consulado Barcelona",
    year: "2025",
    category: "pesquisa",
    tags: ["Internacional", "Espanha", "Inovação"],
    description: "Projeto com parceiros espanhóis via Consulado Brasileiro em Barcelona e Câmara Brasil-Catalunha.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    color: "#4d8cff",
  },
  {
    id: 6,
    title: "Super Trunfo Histórico",
    subtitle: "Card game design",
    year: "2023",
    category: "tech",
    tags: ["Game Design", "Educação", "Print"],
    description: "Jogo de cartas baseado em figuras históricas, submetido a premiação de design.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
    color: "#00ff87",
  },
  {
    id: 7,
    title: "AI Personality Clone",
    subtitle: "Projeto pessoal",
    year: "2025",
    category: "tech",
    tags: ["IA", "Website", "Personalidade"],
    description: "IA modelada na própria personalidade, apresentada como website interativo.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    color: "#00ff87",
  },
  {
    id: 8,
    title: "Trap Tecnopuc 2024",
    subtitle: "Produção musical",
    year: "2024",
    category: "design",
    tags: ["Música", "Criativo", "Evento"],
    description: "Composição e produção de peça musical em estilo trap para o Tecnopuc Experience 2024.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    color: "#ff6b9d",
  },
];

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "design", label: "Design" },
  { key: "pesquisa", label: "Pesquisa" },
  { key: "tech", label: "Tech" },
];

/* ─── intersection observer hook ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.15, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── single project card ─── */
function ProjectCard({ project, index, visible }) {
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  }, []);

  const isLarge = index % 5 === 0 || index % 5 === 3;

  return (
    <div
      ref={cardRef}
      className={`pc-card ${isLarge ? "pc-card--large" : ""} ${visible ? "pc-card--visible" : ""}`}
      style={{ "--delay": `${index * 0.1}s`, "--accent": project.color }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
    >
      {/* image layer */}
      <div className="pc-card-img-wrap">
        <div
          className="pc-card-img"
          style={{
            backgroundImage: `url(${project.image})`,
            transform: hover
              ? `scale(1.08) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
              : "scale(1.02)",
          }}
        />
        <div className="pc-card-overlay" />
        {/* neon border on hover */}
        <div className="pc-card-neon" />
      </div>

      {/* top badges */}
      <div className="pc-card-top">
        <span className="pc-card-year">{project.year}</span>
        <span className="pc-card-cat">{project.category}</span>
      </div>

      {/* bottom info — revealed on hover */}
      <div className="pc-card-info">
        <div className="pc-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pc-card-tag">{tag}</span>
          ))}
        </div>
        <h3 className="pc-card-title">{project.title}</h3>
        <p className="pc-card-sub">{project.subtitle}</p>
        <p className="pc-card-desc">{project.description}</p>
        <div className="pc-card-arrow">
          <span>Ver projeto</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* floating index number */}
      <span className="pc-card-idx">
        {String(project.id).padStart(2, "0")}
      </span>
    </div>
  );
}

/* ─── main section ─── */
export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [sectionRef, sectionInView] = useInView();
  const [headerRef, headerInView] = useInView();

  const filtered = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --pc-bg: #0a0a0f;
          --pc-surface: #111118;
          --pc-neon: #00ff87;
          --pc-blue: #4d8cff;
          --pc-text: #e8e8e8;
          --pc-muted: #666680;
          --pc-dim: #2a2a35;
          --pc-dark: #18181f;
        }

        /* ── section ── */
        .pc-section {
          background: var(--pc-bg);
          padding: 120px 48px 80px;
          position: relative;
          overflow: hidden;
          font-family: 'Satoshi', -apple-system, sans-serif;
        }

        .pc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .pc-inner {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── header ── */
        .pc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 64px;
          gap: 32px;
          flex-wrap: wrap;
        }

        .pc-header-left {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pc-header-left.vis {
          opacity: 1;
          transform: translateY(0);
        }

        .pc-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          color: var(--pc-neon);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pc-label-line {
          width: 32px;
          height: 1px;
          background: var(--pc-neon);
        }

        .pc-heading {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--pc-text);
          text-transform: uppercase;
          letter-spacing: -0.03em;
          line-height: 0.95;
        }

        .pc-heading .outline {
          -webkit-text-stroke: 1.2px var(--pc-muted);
          color: transparent;
        }

        .pc-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--pc-muted);
          margin-top: 12px;
          letter-spacing: 0.04em;
        }

        .pc-count span {
          color: var(--pc-neon);
          font-weight: 500;
        }

        /* ── filters ── */
        .pc-filters {
          display: flex;
          gap: 8px;
          align-self: flex-end;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }
        .pc-filters.vis {
          opacity: 1;
          transform: translateY(0);
        }

        .pc-filter-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 10px 20px;
          border: 1px solid var(--pc-dim);
          background: transparent;
          color: var(--pc-muted);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pc-filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--pc-neon);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .pc-filter-btn:hover {
          border-color: var(--pc-neon);
          color: var(--pc-text);
        }

        .pc-filter-btn.active {
          border-color: var(--pc-neon);
          color: var(--pc-bg);
          background: var(--pc-neon);
        }

        .pc-filter-btn.active::before {
          transform: scaleX(1);
        }

        .pc-filter-btn span {
          position: relative;
          z-index: 1;
        }

        /* ── grid ── */
        .pc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .pc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .pc-section { padding: 80px 20px 60px; }
          .pc-grid { grid-template-columns: 1fr; }
          .pc-header { flex-direction: column; align-items: flex-start; }
        }

        /* ── card ── */
        .pc-card {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 5;
          opacity: 0;
          transform: translateY(60px) scale(0.96);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--delay),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--delay);
        }

        .pc-card--large {
          grid-column: span 2;
          aspect-ratio: 16 / 9;
        }

        @media (max-width: 1024px) {
          .pc-card--large { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .pc-card--large { grid-column: span 1; aspect-ratio: 4 / 5; }
        }

        .pc-card--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* image */
        .pc-card-img-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 6px;
        }

        .pc-card-img {
          position: absolute;
          inset: -8px;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .pc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 10, 15, 0.2) 0%,
            rgba(10, 10, 15, 0.55) 50%,
            rgba(10, 10, 15, 0.92) 100%
          );
          transition: opacity 0.5s ease;
        }

        .pc-card:hover .pc-card-overlay {
          opacity: 0.7;
        }

        /* neon border */
        .pc-card-neon {
          position: absolute;
          inset: 0;
          border-radius: 6px;
          border: 1.5px solid transparent;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          pointer-events: none;
          z-index: 5;
        }

        .pc-card:hover .pc-card-neon {
          border-color: var(--accent);
          box-shadow:
            inset 0 0 30px rgba(0, 0, 0, 0.3),
            0 0 20px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        /* top badges */
        .pc-card-top {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          z-index: 4;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;
        }

        .pc-card:hover .pc-card-top {
          opacity: 1;
          transform: translateY(0);
        }

        .pc-card-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--pc-text);
          background: rgba(10, 10, 15, 0.7);
          backdrop-filter: blur(8px);
          padding: 5px 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          letter-spacing: 0.06em;
        }

        .pc-card-cat {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(10, 10, 15, 0.7);
          backdrop-filter: blur(8px);
          padding: 5px 12px;
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
        }

        /* bottom info */
        .pc-card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          z-index: 4;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pc-card-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;
        }

        .pc-card:hover .pc-card-tags {
          opacity: 1;
          transform: translateY(0);
        }

        .pc-card-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          padding: 3px 8px;
          background: rgba(10, 10, 15, 0.5);
          backdrop-filter: blur(4px);
        }

        .pc-card-title {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: var(--pc-text);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
          transform: translateY(8px);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.02s;
        }

        .pc-card:hover .pc-card-title {
          transform: translateY(0);
        }

        .pc-card--large .pc-card-title {
          font-size: 30px;
        }

        .pc-card-sub {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--pc-muted);
          margin: 0;
          transform: translateY(8px);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.06s;
        }

        .pc-card:hover .pc-card-sub {
          transform: translateY(0);
        }

        .pc-card-desc {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          color: var(--pc-muted);
          line-height: 1.55;
          margin: 0;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        .pc-card:hover .pc-card-desc {
          opacity: 0.8;
          max-height: 80px;
        }

        .pc-card-arrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Satoshi', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 4px;
          opacity: 0;
          transform: translateX(-12px);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.18s;
        }

        .pc-card:hover .pc-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .pc-card-arrow svg {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pc-card:hover .pc-card-arrow svg {
          transform: translate(3px, -3px);
        }

        /* floating index */
        .pc-card-idx {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.4);
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: 100px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.04);
          z-index: 1;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          line-height: 1;
        }

        .pc-card:hover .pc-card-idx {
          transform: translate(-50%, -50%) scale(1);
          -webkit-text-stroke-color: rgba(255, 255, 255, 0.07);
        }

        .pc-card--large .pc-card-idx {
          font-size: 160px;
        }

        /* ── bottom marquee ── */
        @keyframes projectMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .pc-marquee-wrap {
          margin-top: 72px;
          border-top: 1px solid var(--pc-dim);
          border-bottom: 1px solid var(--pc-dim);
          overflow: hidden;
          padding: 16px 0;
        }

        .pc-marquee-track {
          display: flex;
          width: max-content;
          animation: projectMarquee 40s linear infinite;
        }

        .pc-marquee-item {
          font-family: 'Clash Display', sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          white-space: nowrap;
          padding: 0 24px;
          color: var(--pc-dim);
          transition: color 0.3s ease;
        }

        .pc-marquee-item:nth-child(odd) {
          color: var(--pc-muted);
        }

        .pc-marquee-item .bullet {
          color: var(--pc-neon);
          margin: 0 16px;
          font-size: 8px;
          vertical-align: middle;
        }

        @media (prefers-reduced-motion: reduce) {
          .pc-marquee-track { animation: none; }
        }
      `}</style>

      <section className="pc-section">
        <div className="pc-inner">
          {/* header */}
          <div className="pc-header" ref={headerRef}>
            <div className={`pc-header-left ${headerInView ? "vis" : ""}`}>
              <div className="pc-label">
                <span className="pc-label-line" />
                Projetos selecionados
              </div>
              <h2 className="pc-heading">
                Trabalhos<br />
                <span className="outline">recentes</span>
              </h2>
              <p className="pc-count">
                Mostrando <span>{filtered.length}</span> de{" "}
                <span>{PROJECTS.length}</span> projetos
              </p>
            </div>

            <div className={`pc-filters ${headerInView ? "vis" : ""}`}>
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`pc-filter-btn ${filter === f.key ? "active" : ""}`}
                  onClick={() => setFilter(f.key)}
                >
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* grid */}
          <div className="pc-grid" ref={sectionRef}>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                visible={sectionInView}
              />
            ))}
          </div>

          {/* bottom marquee */}
          <div className="pc-marquee-wrap">
            <div className="pc-marquee-track">
              {[...Array(3)].map((_, rep) => (
                <span key={rep}>
                  {PROJECTS.map((p) => (
                    <span key={p.id} className="pc-marquee-item">
                      {p.title}
                      <span className="bullet">{"\u25CF"}</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
