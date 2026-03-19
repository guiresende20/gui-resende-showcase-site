import { useState, useEffect, useRef, useCallback, createContext, useContext, ReactNode } from "react";

/* ─── Cursor Context ─── */
const CursorContext = createContext({
  setCursorState: (_state: string) => {},
  setCursorText: (_text: string) => {},
});

export function useCursorState() {
  return useContext(CursorContext);
}

/* ═══ 1. CUSTOM CURSOR ═══ */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const visible = useRef(false);
  const [state, setState] = useState("default");
  const [label, setLabel] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    function animate() {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      const ringX = lerp(parseFloat(ringRef.current?.dataset.x || String(pos.current.x)), target.current.x, 0.08);
      const ringY = lerp(parseFloat(ringRef.current?.dataset.y || String(pos.current.y)), target.current.y, 0.08);
      if (ringRef.current) {
        ringRef.current.dataset.x = String(ringX);
        ringRef.current.dataset.y = String(ringY);
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    }
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button, [data-cursor], input, textarea, select, [role='button']");
      if (!el) { setState("default"); setLabel(""); return; }
      const cursorType = (el as HTMLElement).dataset.cursor || "pointer";
      const cursorLabel = (el as HTMLElement).dataset.cursorLabel || "";
      setState(cursorType);
      setLabel(cursorLabel);
    };
    const onDown = () => setState((s) => (s === "pointer" ? "click" : s));
    const onUp = () => setState((s) => (s === "click" ? "pointer" : s));
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const ringSize = { default: 40, pointer: 64, click: 48, text: 2, hidden: 0, view: 80 }[state] || 40;
  const dotSize = state === "text" ? 2 : state === "hidden" ? 0 : 6;
  const ringOpacity = state === "hidden" ? 0 : state === "text" ? 0 : 1;
  const dotColor = state === "click" ? "#00ff87" : "#e8e8e8";
  const ringBorder = state === "pointer" || state === "view"
    ? "1.5px solid rgba(0, 255, 135, 0.6)"
    : state === "click"
    ? "1.5px solid rgba(0, 255, 135, 0.9)"
    : "1px solid rgba(232, 232, 232, 0.25)";
  const ringBg = state === "view"
    ? "rgba(0, 255, 135, 0.08)"
    : state === "pointer"
    ? "rgba(0, 255, 135, 0.04)"
    : "transparent";
  const showLabel = state === "view" && label;

  return (
    <CursorContext.Provider value={{ setCursorState: setState, setCursorText: setLabel }}>
      <style>{`
        *, *::before, *::after { cursor: none !important; }
        .cc-dot {
          position: fixed; top: 0; left: 0;
          width: ${dotSize}px; height: ${dotSize}px;
          border-radius: 50%; background: ${dotColor};
          pointer-events: none; z-index: 99999; opacity: 0;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), background 0.2s ease, opacity 0.3s ease;
          mix-blend-mode: difference;
        }
        .cc-ring {
          position: fixed; top: 0; left: 0;
          width: ${ringSize}px; height: ${ringSize}px;
          border-radius: 50%; border: ${ringBorder}; background: ${ringBg};
          pointer-events: none; z-index: 99998; opacity: ${ringOpacity};
          transition: width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border 0.3s ease, background 0.3s ease, opacity 0.3s ease;
        }
        .cc-label {
          position: fixed; top: 0; left: 0;
          pointer-events: none; z-index: 99999;
          font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.12em; color: #00ff87;
          white-space: nowrap; opacity: ${showLabel ? 1 : 0}; transition: opacity 0.3s ease;
        }
        @media (pointer: coarse) {
          *, *::before, *::after { cursor: auto !important; }
          .cc-dot, .cc-ring, .cc-label { display: none; }
        }
      `}</style>
      <div ref={dotRef} className="cc-dot" />
      <div ref={ringRef} className="cc-ring" data-x="-100" data-y="-100" />
      {showLabel && <div ref={textRef} className="cc-label">{label}</div>}
    </CursorContext.Provider>
  );
}

/* ═══ 2. MAGNETIC ELEMENT ═══ */
export function MagneticElement({ children, strength = 0.35, className = "", cursorState = "pointer", cursorLabel = "", ...props }: { children: ReactNode; strength?: number; className?: string; cursorState?: string; cursorLabel?: string; [key: string]: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    ref.current.style.transform = `translate(${(e.clientX - cx) * strength}px, ${(e.clientY - cy) * strength}px)`;
  }, [strength]);
  const handleLeave = useCallback(() => { if (ref.current) ref.current.style.transform = "translate(0, 0)"; }, []);
  return (
    <div ref={ref} className={className} data-cursor={cursorState} data-cursor-label={cursorLabel}
      onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)", willChange: "transform" }} {...props}>
      {children}
    </div>
  );
}

/* ═══ 3. TEXT SCRAMBLE ═══ */
const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#_abcdefghijklmnop";

export function TextScramble({ text, as: Tag = "span", className = "", speed = 30, ...props }: { text: string; as?: any; className?: string; speed?: number; [key: string]: any }) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);
  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    frameRef.current = 0;
    const length = text.length;
    intervalRef.current = setInterval(() => {
      frameRef.current++;
      const progress = frameRef.current / length;
      const result = text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i / length < progress) return char;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join("");
      setDisplay(result);
      if (frameRef.current >= length * 1.5) { clearInterval(intervalRef.current!); setDisplay(text); }
    }, speed);
  }, [text, speed]);
  const reset = useCallback(() => { if (intervalRef.current) clearInterval(intervalRef.current); setDisplay(text); }, [text]);
  useEffect(() => { return () => { if (intervalRef.current) clearInterval(intervalRef.current); }; }, []);
  return <Tag className={className} onMouseEnter={scramble} onMouseLeave={reset} data-cursor="pointer" {...props}>{display}</Tag>;
}

/* ═══ 4. REVEAL ON SCROLL ═══ */
export function RevealOnScroll({ children, delay = 0, direction = "up", distance = 50, duration = 0.7, threshold = 0.15, className = "", once = true, ...props }: { children: ReactNode; delay?: number; direction?: string; distance?: number; duration?: number; threshold?: number; className?: string; once?: boolean; [key: string]: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); if (once) obs.unobserve(el); }
      else if (!once) setVisible(false);
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  const transforms: Record<string, string> = { up: `translateY(${distance}px)`, down: `translateY(-${distance}px)`, left: `translateX(${distance}px)`, right: `translateX(-${distance}px)`, scale: `scale(0.92)` };
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction] || transforms.up, transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`, willChange: "opacity, transform" }} {...props}>
      {children}
    </div>
  );
}

/* ═══ 5. PARALLAX TILT ═══ */
export function ParallaxTilt({ children, maxTilt = 8, glare = true, className = "", ...props }: { children: ReactNode; maxTilt?: number; glare?: boolean; className?: string; [key: string]: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);
  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * maxTilt * -2, y: (px - 0.5) * maxTilt * 2 });
    setGlarePos({ x: px * 100, y: py * 100 });
  }, [maxTilt]);
  const handleLeave = useCallback(() => { setTilt({ x: 0, y: 0 }); setHovering(false); }, []);
  return (
    <div ref={ref} className={className} onMouseMove={handleMove} onMouseEnter={() => setHovering(true)} onMouseLeave={handleLeave} data-cursor="pointer"
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: hovering ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)", willChange: "transform", position: "relative", overflow: "hidden" }} {...props}>
      {children}
      {glare && <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: hovering ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0,255,135,0.08) 0%, transparent 60%)` : "none", transition: "background 0.3s ease", borderRadius: "inherit" }} />}
    </div>
  );
}

/* ═══ 6. SMOOTH SCROLL PROVIDER ═══ */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handleClick);
    return () => { document.removeEventListener("click", handleClick); document.documentElement.style.scrollBehavior = ""; };
  }, []);
  return <>{children}</>;
}

/* ═══ 7. SCROLL PROGRESS BAR ═══ */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "2px", zIndex: 99990, background: "transparent", pointerEvents: "none" }}>
      <div ref={barRef} style={{ height: "100%", width: "0%", background: "linear-gradient(90deg, #00ff87, #4d8cff)", boxShadow: "0 0 12px rgba(0,255,135,0.4)", transition: "width 0.1s linear" }} />
    </div>
  );
}

/* ═══ 8. PAGE TRANSITION ═══ */
export function PageTransition({ active = false, color = "#00ff87" }: { active?: boolean; color?: string }) {
  return (
    <>
      <style>{`
        @keyframes wipeIn {
          0% { transform: scaleY(0); transform-origin: bottom; }
          50% { transform: scaleY(1); transform-origin: bottom; }
          50.01% { transform-origin: top; }
          100% { transform: scaleY(0); transform-origin: top; }
        }
        .pt-overlay { position: fixed; inset: 0; z-index: 99995; pointer-events: none; }
        .pt-overlay.active { pointer-events: all; animation: wipeIn 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
      `}</style>
      <div className={`pt-overlay ${active ? "active" : ""}`} style={{ background: color, transform: "scaleY(0)" }} />
    </>
  );
}

/* ═══ 9. STAGGER GROUP ═══ */
export function StaggerGroup({ children, stagger = 0.08, direction = "up", distance = 40, threshold = 0.1, className = "" }: { children: ReactNode; stagger?: number; direction?: string; distance?: number; threshold?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  const transforms: Record<string, string> = { up: `translateY(${distance}px)`, down: `translateY(-${distance}px)`, left: `translateX(${distance}px)`, right: `translateX(-${distance}px)` };
  const items = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction] || transforms.up, transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * stagger}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * stagger}s` }}>
          {child}
        </div>
      ))}
    </div>
  );
}

/* ═══ 10. HOVER GLOW CARD ═══ */
export function HoverGlowCard({ children, className = "", glowColor = "rgba(0, 255, 135, 0.08)", borderColor = "rgba(0, 255, 135, 0.3)", ...props }: { children: ReactNode; className?: string; glowColor?: string; borderColor?: string; [key: string]: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);
  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  }, []);
  return (
    <div ref={ref} className={className} onMouseMove={handleMove} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} data-cursor="pointer"
      style={{ position: "relative", overflow: "hidden", border: `1px solid ${hovering ? borderColor : "rgba(42,42,53,1)"}`, transition: "border-color 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)", transform: hovering ? "translateY(-2px)" : "none" }} {...props}>
      <div style={{ position: "absolute", inset: "-1px", pointerEvents: "none", borderRadius: "inherit", background: hovering ? `radial-gradient(circle 200px at ${pos.x}% ${pos.y}%, ${glowColor}, transparent)` : "none", transition: "background 0.2s ease", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
