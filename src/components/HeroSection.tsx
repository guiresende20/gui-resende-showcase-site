import { useState, useEffect, useRef } from "react";

const SKILLS = [
  "UX/UI Design",
  "Inteligência Artificial",
  "Realidade Virtual",
  "Realidade Aumentada",
  "Impressão 3D",
  "Design & Tecnologia",
  "Pesquisa Acadêmica",
  "Inovação",
  "Prototipagem",
  "Design de Interação",
];

function AnimatedLetter({ char, delay }) {
  return (
    <span
      style={{
        display: "inline-block",
        opacity: 0,
        transform: "translateY(60px) rotateX(-40deg)",
        animation: `letterReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards`,
        whiteSpace: char === " " ? "pre" : "normal",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}

function AnimatedWord({ text, baseDelay, className, style }) {
  return (
    <span className={className} style={style}>
      {text.split("").map((char, i) => (
        <AnimatedLetter key={i} char={char} delay={baseDelay + i * 0.035} />
      ))}
    </span>
  );
}

function GlowDot({ x, y, size, delay, color }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${parseInt(size) * 2}px)`,
        opacity: 0,
        animation: `glowFloat 6s ease-in-out ${delay}s infinite`,
        pointerEvents: "none",
      }}
    />
  );
}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {}, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --hero-bg: #0a0a0f;
          --hero-surface: #111118;
          --hero-neon: #00ff87;
          --hero-blue: #4d8cff;
          --hero-text: #e8e8e8;
          --hero-muted: #666680;
          --hero-dim: #2a2a35;
        }

        @keyframes letterReveal {
          0% { opacity: 0; transform: translateY(60px) rotateX(-40deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes glowFloat {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.3); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes lineExpand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,255,135,0.15), 0 0 60px rgba(0,255,135,0.05); }
          50% { box-shadow: 0 0 30px rgba(0,255,135,0.3), 0 0 80px rgba(0,255,135,0.1); }
        }

        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001s !important; }
        }

        body { background: var(--hero-bg); }

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: var(--hero-bg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: 'Satoshi', -apple-system, sans-serif;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .hero-grid-accent {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,135,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.018) 1px, transparent 1px);
          background-size: 192px 192px;
          pointer-events: none;
        }

        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, var(--hero-bg) 100%);
          pointer-events: none;
        }

        .hero-spotlight {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,135,0.04) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: left 0.4s ease-out, top 0.4s ease-out;
        }

        .hero-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 48px;
          z-index: 10;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1.8s forwards;
        }

        .hero-nav-logo {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--hero-text);
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .hero-nav-logo .dot {
          color: var(--hero-neon);
        }

        .hero-nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }

        .hero-nav-links a {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--hero-muted);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.3s ease;
          position: relative;
        }

        .hero-nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--hero-neon);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-nav-links a:hover { color: var(--hero-text); }
        .hero-nav-links a:hover::after { width: 100%; }

        .hero-content {
          position: relative;
          z-index: 5;
          padding: 0 48px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          color: var(--hero-neon);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 36px;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out 0.3s forwards;
        }

        .hero-tag-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--hero-neon);
          box-shadow: 0 0 8px rgba(0,255,135,0.5);
          animation: cursorBlink 1.2s step-end infinite;
        }

        .hero-title {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: clamp(3.2rem, 9vw, 8rem);
          line-height: 0.9;
          letter-spacing: -0.035em;
          text-transform: uppercase;
          margin: 0 0 28px;
          perspective: 600px;
        }

        .hero-title-fill { color: var(--hero-text); }

        .hero-title-outline {
          -webkit-text-stroke: 1.5px var(--hero-muted);
          color: transparent;
        }

        .hero-title-accent { color: var(--hero-neon); }
        .hero-title-blue { color: var(--hero-blue); }
        .hero-title-row { display: block; overflow: hidden; }

        .hero-subtitle {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 400;
          color: var(--hero-muted);
          max-width: 520px;
          line-height: 1.65;
          margin: 0 0 44px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1.4s forwards;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1.6s forwards;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--hero-bg);
          background: var(--hero-neon);
          border: none;
          padding: 16px 36px;
          border-radius: 0;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .hero-cta:hover { transform: translateY(-2px) scale(1.02); }

        .hero-cta-arrow {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-cta:hover .hero-cta-arrow { transform: translateX(5px); }

        .hero-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--hero-muted);
          background: transparent;
          border: 1px solid var(--hero-dim);
          padding: 15px 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-cta-ghost:hover {
          border-color: var(--hero-blue);
          color: var(--hero-blue);
          background: rgba(77,140,255,0.05);
        }

        .hero-line {
          width: 100%;
          max-width: 1400px;
          margin: 52px auto 0;
          padding: 0 48px;
          position: relative;
          z-index: 5;
        }

        .hero-line-inner {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--hero-dim) 15%, var(--hero-neon) 50%, var(--hero-dim) 85%, transparent);
          transform-origin: left;
          transform: scaleX(0);
          animation: lineExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards;
        }

        .hero-marquee {
          position: relative;
          z-index: 5;
          overflow: hidden;
          padding: 18px 0;
          margin-top: 12px;
        }

        .hero-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }

        .hero-marquee-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 400;
          color: var(--hero-muted);
          white-space: nowrap;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .hero-marquee-text .acc {
          color: var(--hero-neon);
          font-weight: 500;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 10;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out 2.2s forwards;
        }

        .hero-scroll-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          color: var(--hero-dim);
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .hero-scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, var(--hero-neon), transparent);
        }

        .hero-side-label {
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          color: var(--hero-dim);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          z-index: 5;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out 2s forwards;
        }

        .hero-counter {
          position: absolute;
          left: 48px;
          bottom: 96px;
          z-index: 5;
          display: flex;
          gap: 44px;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out 2s forwards;
        }

        .hero-counter-num {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: 30px;
          color: var(--hero-text);
          letter-spacing: -0.02em;
        }

        .hero-counter-num .n { color: var(--hero-neon); }

        .hero-counter-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          color: var(--hero-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        .hero-corner-deco {
          position: absolute;
          width: 60px;
          height: 60px;
          border-color: var(--hero-dim);
          border-style: solid;
          pointer-events: none;
          z-index: 5;
          opacity: 0;
          animation: fadeInUp 0.5s ease-out 2.4s forwards;
        }

        .hero-corner-tl {
          top: 20px; left: 20px;
          border-width: 1px 0 0 1px;
        }

        .hero-corner-br {
          bottom: 20px; right: 20px;
          border-width: 0 1px 1px 0;
        }

        @media (max-width: 768px) {
          .hero-nav { padding: 16px 20px; }
          .hero-nav-links { display: none; }
          .hero-content { padding: 0 20px; }
          .hero-title { font-size: clamp(2.4rem, 13vw, 4.5rem); }
          .hero-line { padding: 0 20px; }
          .hero-side-label { display: none; }
          .hero-counter { left: 20px; bottom: 80px; gap: 24px; }
          .hero-counter-num { font-size: 24px; }
          .hero-cta-row { flex-direction: column; align-items: flex-start; gap: 12px; }
          .hero-corner-deco { width: 40px; height: 40px; }
        }
      `}</style>

      <section
        ref={heroRef}
        className="hero-root"
        onMouseMove={handleMouseMove}
      >
        <div className="hero-grid-bg" />
        <div className="hero-grid-accent" />
        <div className="hero-vignette" />

        <div
          className="hero-spotlight"
          style={{ left: `${mousePos.x}%`, top: `${mousePos.y}%` }}
        />

        <GlowDot x={12} y={20} size="200px" delay={0} color="rgba(0,255,135,0.07)" />
        <GlowDot x={78} y={55} size="240px" delay={2} color="rgba(77,140,255,0.05)" />
        <GlowDot x={55} y={12} size="160px" delay={4} color="rgba(0,255,135,0.04)" />

        <div className="hero-corner-deco hero-corner-tl" />
        <div className="hero-corner-deco hero-corner-br" />

        <nav className="hero-nav">
          <div className="hero-nav-logo">
            Gui<span className="dot">.</span>Resende
          </div>
          <ul className="hero-nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#pesquisa">Pesquisa</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            CriaLab — Tecnopuc / PUC-RS
          </div>

          <h1 className="hero-title">
            <span className="hero-title-row">
              <AnimatedWord
                text="Designer"
                baseDelay={0.4}
                className="hero-title-fill"
              />
            </span>
            <span className="hero-title-row">
              <AnimatedWord
                text="&"
                baseDelay={0.85}
                className="hero-title-outline"
                style={{ marginRight: "0.25em" }}
              />
              <AnimatedWord
                text="Pesqui"
                baseDelay={0.95}
                className="hero-title-accent"
              />
              <AnimatedWord
                text="sador"
                baseDelay={1.18}
                className="hero-title-blue"
              />
            </span>
          </h1>

          <p className="hero-subtitle">
            Mestre em Design e Tecnologia pela UFRGS. Explorando as fronteiras
            entre inteligência artificial, experiência do usuário e realidades
            imersivas.
          </p>

          <div className="hero-cta-row">
            <button className="hero-cta">
              Ver projetos
              <span className="hero-cta-arrow">→</span>
            </button>
            <button className="hero-cta-ghost">
              Currículo <span>↓</span>
            </button>
          </div>
        </div>

        <div className="hero-line">
          <div className="hero-line-inner" />
        </div>

        <div className="hero-marquee">
          <div className="hero-marquee-track">
            {[0, 1, 2].map((i) => (
              <span key={i} className="hero-marquee-text">
                {SKILLS.map((skill, j) => (
                  <span key={j}>
                    <span className={j % 3 === 0 ? "acc" : ""}>
                      {skill}
                    </span>
                    {" \u2022 "}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-side-label">Portfolio 2025</div>

        <div className="hero-counter">
          <div>
            <div className="hero-counter-num">12<span className="n">+</span></div>
            <div className="hero-counter-label">Publicações</div>
          </div>
          <div>
            <div className="hero-counter-num">01<span className="n">.</span></div>
            <div className="hero-counter-label">Patente</div>
          </div>
          <div>
            <div className="hero-counter-num">08<span className="n">+</span></div>
            <div className="hero-counter-label">Anos exp.</div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>
    </>
  );
}
