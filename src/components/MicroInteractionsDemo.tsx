import { useState } from "react";
import {
  CustomCursor,
  MagneticElement,
  TextScramble,
  RevealOnScroll,
  ParallaxTilt,
  SmoothScrollProvider,
  ScrollProgress,
  StaggerGroup,
  HoverGlowCard,
} from "./MicroInteractions";

/* ─── Demo showcase ─── */
export default function MicroInteractionsDemo() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <ScrollProgress />

      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --bg: #0a0a0f;
          --surface: #111118;
          --neon: #00ff87;
          --blue: #4d8cff;
          --text: #e8e8e8;
          --muted: #666680;
          --dim: #2a2a35;
        }

        body { background: var(--bg); }

        .demo {
          background: var(--bg);
          color: var(--text);
          font-family: 'Satoshi', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .demo::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .demo-section {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 48px;
        }

        .demo-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .demo-label-line {
          width: 28px;
          height: 1px;
          background: var(--neon);
        }

        .demo-title {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 3.2rem);
          text-transform: uppercase;
          letter-spacing: -0.03em;
          line-height: 0.95;
          margin-bottom: 16px;
        }

        .demo-desc {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.65;
          max-width: 520px;
          margin-bottom: 48px;
        }

        .demo-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--dim) 20%, var(--neon) 50%, var(--dim) 80%, transparent);
          margin: 0 48px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Magnetic buttons demo ── */
        .btn-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .btn-neon {
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--bg);
          background: var(--neon);
          border: none;
          padding: 16px 36px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-ghost {
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--muted);
          background: transparent;
          border: 1px solid var(--dim);
          padding: 16px 32px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          border-color: var(--blue);
          color: var(--blue);
          background: rgba(77,140,255,0.05);
        }

        .btn-outline-neon {
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--neon);
          background: transparent;
          border: 1px solid var(--neon);
          padding: 16px 32px;
          transition: all 0.3s ease;
        }

        .btn-outline-neon:hover {
          background: rgba(0,255,135,0.08);
          box-shadow: 0 0 24px rgba(0,255,135,0.15);
        }

        /* ── Text scramble demo ── */
        .scramble-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .scramble-item {
          font-family: 'Clash Display', sans-serif;
          font-weight: 600;
          font-size: clamp(24px, 4vw, 42px);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: var(--text);
          display: inline-flex;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.3s ease;
        }

        .scramble-item:hover {
          color: var(--neon);
        }

        /* ── Parallax cards demo ── */
        .tilt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .tilt-grid { grid-template-columns: 1fr; }
          .demo-section { padding: 60px 20px; }
        }

        .tilt-card {
          background: var(--surface);
          border: 1px solid var(--dim);
          border-radius: 6px;
          padding: 32px 28px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 8px;
        }

        .tilt-card-num {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: 48px;
          color: var(--neon);
          opacity: 0.2;
          line-height: 1;
          margin-bottom: 12px;
        }

        .tilt-card-title {
          font-family: 'Clash Display', sans-serif;
          font-weight: 600;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }

        .tilt-card-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }

        /* ── Glow cards demo ── */
        .glow-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .glow-grid { grid-template-columns: 1fr; }
        }

        .glow-card-inner {
          background: var(--surface);
          border-radius: 8px;
          padding: 36px 32px;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .glow-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .glow-card-title {
          font-family: 'Clash Display', sans-serif;
          font-weight: 600;
          font-size: 18px;
          text-transform: uppercase;
        }

        .glow-card-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ── Nav links demo ── */
        .nav-demo {
          display: flex;
          gap: 36px;
          margin-bottom: 40px;
        }

        .nav-link {
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--neon);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover { color: var(--text); }
        .nav-link:hover::after { width: 100%; }

        /* ── Stagger demo ── */
        .stagger-item {
          padding: 20px 24px;
          background: var(--surface);
          border: 1px solid var(--dim);
          border-radius: 4px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stagger-item-title {
          font-family: 'Satoshi', sans-serif;
          font-weight: 600;
          font-size: 15px;
        }

        .stagger-item-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid rgba(0,255,135,0.25);
          padding: 4px 10px;
        }
      `}</style>

      <div className="demo">

        {/* ══ Section 1: Magnetic Buttons ══ */}
        <div className="demo-section">
          <RevealOnScroll>
            <div className="demo-label">
              <span className="demo-label-line" />
              01 — Magnetic buttons
            </div>
            <div className="demo-title">
              Botões com<br />atração magnética
            </div>
            <div className="demo-desc">
              O cursor é atraído pelo centro do botão com interpolação suave.
              O anel externo expande e fica neon ao entrar na área interativa.
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="btn-row">
              <MagneticElement strength={0.4}>
                <button className="btn-neon">
                  Ver projetos <span>→</span>
                </button>
              </MagneticElement>

              <MagneticElement strength={0.3}>
                <button className="btn-ghost">
                  Currículo <span>↓</span>
                </button>
              </MagneticElement>

              <MagneticElement strength={0.35}>
                <button className="btn-outline-neon">
                  Contato
                </button>
              </MagneticElement>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="demo-label" style={{ marginTop: 48 }}>
              <span className="demo-label-line" />
              Nav links com underline neon
            </div>
            <div className="nav-demo">
              <MagneticElement strength={0.25}>
                <a href="#" className="nav-link">Sobre</a>
              </MagneticElement>
              <MagneticElement strength={0.25}>
                <a href="#" className="nav-link">Projetos</a>
              </MagneticElement>
              <MagneticElement strength={0.25}>
                <a href="#" className="nav-link">Pesquisa</a>
              </MagneticElement>
              <MagneticElement strength={0.25}>
                <a href="#" className="nav-link">Contato</a>
              </MagneticElement>
            </div>
          </RevealOnScroll>
        </div>

        <div className="demo-divider" />

        {/* ══ Section 2: Text Scramble ══ */}
        <div className="demo-section">
          <RevealOnScroll>
            <div className="demo-label">
              <span className="demo-label-line" />
              02 — Text scramble
            </div>
            <div className="demo-title">
              Hover para<br />embaralhar
            </div>
            <div className="demo-desc">
              Texto percorre caracteres aleatórios antes de resolver na palavra
              final. Funciona em menus, títulos e links de navegação.
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="scramble-grid">
              <TextScramble text="UX/UI Design" className="scramble-item" />
              <TextScramble text="Inteligência Artificial" className="scramble-item" />
              <TextScramble text="Realidade Virtual" className="scramble-item" />
              <TextScramble text="Impressão 3D" className="scramble-item" />
              <TextScramble text="Design & Tecnologia" className="scramble-item" />
            </div>
          </RevealOnScroll>
        </div>

        <div className="demo-divider" />

        {/* ══ Section 3: Parallax Tilt Cards ══ */}
        <div className="demo-section">
          <RevealOnScroll>
            <div className="demo-label">
              <span className="demo-label-line" />
              03 — Parallax tilt
            </div>
            <div className="demo-title">
              Cards com<br />inclinação 3D
            </div>
            <div className="demo-desc">
              O card inclina na direção do cursor com perspective 3D.
              Um brilho neon segue a posição do mouse.
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="tilt-grid">
              <ParallaxTilt maxTilt={10}>
                <div className="tilt-card">
                  <div className="tilt-card-num">01</div>
                  <div className="tilt-card-title">Pesquisa</div>
                  <div className="tilt-card-desc">
                    Entrevistas semi-estruturadas com lideranças da PUC-RS
                  </div>
                </div>
              </ParallaxTilt>

              <ParallaxTilt maxTilt={10}>
                <div className="tilt-card">
                  <div className="tilt-card-num">02</div>
                  <div className="tilt-card-title">Prototipagem</div>
                  <div className="tilt-card-desc">
                    Do wireframe ao protótipo de alta fidelidade interativo
                  </div>
                </div>
              </ParallaxTilt>

              <ParallaxTilt maxTilt={10}>
                <div className="tilt-card">
                  <div className="tilt-card-num">03</div>
                  <div className="tilt-card-title">Validação</div>
                  <div className="tilt-card-desc">
                    Testes com usuários e iteração baseada em dados
                  </div>
                </div>
              </ParallaxTilt>
            </div>
          </RevealOnScroll>
        </div>

        <div className="demo-divider" />

        {/* ══ Section 4: Hover Glow Cards ══ */}
        <div className="demo-section">
          <RevealOnScroll>
            <div className="demo-label">
              <span className="demo-label-line" />
              04 — Glow cards
            </div>
            <div className="demo-title">
              Brilho que segue<br />o cursor
            </div>
            <div className="demo-desc">
              Gradiente radial que acompanha o mouse, com borda que
              acende ao hover. Ideal para cards de serviço ou feature.
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="glow-grid">
              <HoverGlowCard
                style={{ borderRadius: 8 }}
                glowColor="rgba(0, 255, 135, 0.06)"
                borderColor="rgba(0, 255, 135, 0.35)"
              >
                <div className="glow-card-inner">
                  <div className="glow-card-icon" style={{ background: "rgba(0,255,135,0.1)", color: "#00ff87" }}>AI</div>
                  <div className="glow-card-title">Inteligência Artificial</div>
                  <div className="glow-card-desc">Integração de IA em metodologias de design, ferramentas e workflows criativos.</div>
                </div>
              </HoverGlowCard>

              <HoverGlowCard
                style={{ borderRadius: 8 }}
                glowColor="rgba(77, 140, 255, 0.06)"
                borderColor="rgba(77, 140, 255, 0.35)"
              >
                <div className="glow-card-inner">
                  <div className="glow-card-icon" style={{ background: "rgba(77,140,255,0.1)", color: "#4d8cff" }}>VR</div>
                  <div className="glow-card-title">Realidades Imersivas</div>
                  <div className="glow-card-desc">Experiências em VR/AR para educação, cultura e inovação tecnológica.</div>
                </div>
              </HoverGlowCard>

              <HoverGlowCard
                style={{ borderRadius: 8 }}
                glowColor="rgba(255, 107, 157, 0.06)"
                borderColor="rgba(255, 107, 157, 0.35)"
              >
                <div className="glow-card-inner">
                  <div className="glow-card-icon" style={{ background: "rgba(255,107,157,0.1)", color: "#ff6b9d" }}>3D</div>
                  <div className="glow-card-title">Impressão 3D</div>
                  <div className="glow-card-desc">Prototipagem rápida e fabricação digital para projetos de design.</div>
                </div>
              </HoverGlowCard>

              <HoverGlowCard
                style={{ borderRadius: 8 }}
                glowColor="rgba(255, 167, 38, 0.06)"
                borderColor="rgba(255, 167, 38, 0.35)"
              >
                <div className="glow-card-inner">
                  <div className="glow-card-icon" style={{ background: "rgba(255,167,38,0.1)", color: "#ffa726" }}>UX</div>
                  <div className="glow-card-title">Design de Interação</div>
                  <div className="glow-card-desc">UX/UI centrado no usuário com pesquisa, testes e iteração contínua.</div>
                </div>
              </HoverGlowCard>
            </div>
          </RevealOnScroll>
        </div>

        <div className="demo-divider" />

        {/* ══ Section 5: Stagger Group ══ */}
        <div className="demo-section">
          <RevealOnScroll>
            <div className="demo-label">
              <span className="demo-label-line" />
              05 — Stagger reveal
            </div>
            <div className="demo-title">
              Itens com delay<br />incremental
            </div>
            <div className="demo-desc">
              Cada filho do StaggerGroup recebe um delay automático,
              criando um efeito cascata ao entrar na viewport.
            </div>
          </RevealOnScroll>

          <StaggerGroup stagger={0.1} direction="up" className="">
            <div className="stagger-item">
              <span className="stagger-item-title">Tecnopuc Experience 2025</span>
              <span className="stagger-item-tag">Evento</span>
            </div>
            <div className="stagger-item">
              <span className="stagger-item-title">Hub Inovação Santa Rosa</span>
              <span className="stagger-item-tag">Pesquisa</span>
            </div>
            <div className="stagger-item">
              <span className="stagger-item-title">Internacionalização PUC × Barcelona</span>
              <span className="stagger-item-tag">Internacional</span>
            </div>
            <div className="stagger-item">
              <span className="stagger-item-title">AI Personality Clone</span>
              <span className="stagger-item-tag">Tech</span>
            </div>
            <div className="stagger-item">
              <span className="stagger-item-title">FAMECOS × Tecnopuc</span>
              <span className="stagger-item-tag">Cultura</span>
            </div>
            <div className="stagger-item">
              <span className="stagger-item-title">Mascote CriaLab</span>
              <span className="stagger-item-tag">Design</span>
            </div>
          </StaggerGroup>
        </div>

        {/* Footer spacer */}
        <div style={{ height: 120 }} />
      </div>
    </SmoothScrollProvider>
  );
}
