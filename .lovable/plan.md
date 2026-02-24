
# Melhorias Visuais e Transicoes do Site

## 1. Animacoes de Entrada (Scroll Reveal)

Criar um hook customizado `useScrollReveal` que usa `IntersectionObserver` para animar elementos quando entram na viewport. Cada secao tera animacoes de fade-in + slide-up ao rolar a pagina.

- Elementos aparecem suavemente conforme o usuario rola
- Cards e itens de lista animam com delay escalonado (stagger)
- Titulos de secao animam separadamente dos conteudos

## 2. Transicoes entre Secoes

- Adicionar separadores visuais entre secoes usando formas SVG (wave dividers / diagonal dividers)
- Alternar fundos entre secoes com gradientes mais expressivos (ao inves de apenas `bg-white` e `bg-slate-50`)

## 3. Melhorias Visuais nos Componentes

### Hero
- Adicionar animacao de typing/typewriter no subtitulo
- Efeito de glow pulsante no avatar
- Botoes com efeito hover mais sofisticado (gradiente + sombra)

### Cards (About, Skills, Experience, Education, Contact)
- Adicionar borda gradiente sutil nos cards ao hover
- Efeito glassmorphism leve nos cards
- Icones com animacao de bounce ao hover

### Skills
- Barras de progresso animam ao entrar na viewport (de 0% ate o valor final)
- Adicionar efeito de brilho (shimmer) nas barras

### Projects
- Cards com efeito de tilt 3D sutil ao hover (CSS perspective)
- Overlay gradiente mais dinamico nas imagens

### Header
- Efeito de blur mais forte e borda sutil ao rolar

## Detalhes Tecnicos

### Novo arquivo: `src/hooks/useScrollReveal.ts`
Hook que usa IntersectionObserver para detectar quando elementos entram na viewport e aplica classes CSS de animacao.

### Novo arquivo: `src/components/SectionDivider.tsx`
Componente SVG reutilizavel para criar divisores visuais ondulados/diagonais entre secoes.

### Alteracoes no `tailwind.config.ts`
Adicionar keyframes customizados: `fade-up`, `fade-in-left`, `fade-in-right`, `shimmer`, `float`, `glow`.

### Alteracoes no `src/index.css`
Adicionar classes utilitarias para animacoes e glassmorphism.

### Componentes modificados:
- **Hero.tsx** - Animacoes de entrada, glow no avatar, typing effect
- **About.tsx** - Scroll reveal nos cards, gradiente de fundo
- **Experience.tsx** - Scroll reveal com stagger nos cards
- **Projects.tsx** - Scroll reveal, tilt effect nos cards
- **Education.tsx** - Scroll reveal com stagger
- **Skills.tsx** - Barras animadas ao scroll, shimmer
- **Contact.tsx** - Scroll reveal nos cards
- **Footer.tsx** - Animacao sutil de entrada
- **Header.tsx** - Blur aprimorado
- **Index.tsx** - Adicionar SectionDivider entre secoes
