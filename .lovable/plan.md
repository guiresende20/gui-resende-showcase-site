
# Transicoes CSS com Circle-Swoop entre Secoes

## Objetivo
Adicionar transicoes visuais no estilo `clip-path` circle-swoop que ativam conforme o usuario rola a pagina. As secoes afetadas serao: **Inicio (Hero), Sobre, Experiencia, Projetos e Contato**.

## Como funciona
Cada secao tera um efeito de revelacao com `clip-path` animado (circle-swoop) que dispara quando a secao entra na viewport via `IntersectionObserver`. Isso cria a sensacao de que cada bloco do site "aparece" de forma dramatica, quebrando a continuidade visual.

## Implementacao

### 1. Adicionar CSS custom properties e keyframes em `src/index.css`

Definir as variaveis de clip-path e a animacao `in-circle-swoop`:

```css
:root {
  --circle-top-right-out: circle(0% at 100% 0%);
  --circle-bottom-right-in: circle(150% at 100% 100%);
  --circle-top-left-out: circle(0% at 0% 0%);
  --circle-bottom-left-in: circle(150% at 0% 100%);
}

@keyframes in-circle-swoop {
  from { clip-path: var(--circle-top-right-out); }
  to { clip-path: var(--circle-bottom-right-in); }
}

@keyframes in-circle-swoop-left {
  from { clip-path: var(--circle-top-left-out); }
  to { clip-path: var(--circle-bottom-left-in); }
}

.section-transition {
  clip-path: var(--circle-top-right-out);
  opacity: 0;
}

.section-transition.visible {
  animation: in-circle-swoop 1.2s ease-out forwards;
  opacity: 1;
}

.section-transition-left {
  clip-path: var(--circle-top-left-out);
  opacity: 0;
}

.section-transition-left.visible {
  animation: in-circle-swoop-left 1.2s ease-out forwards;
  opacity: 1;
}
```

### 2. Criar hook `useSectionTransition` ou reutilizar `useScrollReveal`

Reutilizar o hook `useScrollReveal` existente para detectar quando a secao entra na viewport e aplicar a classe `visible`.

### 3. Modificar os componentes das secoes

Envolver o conteudo de cada secao num wrapper `<div>` com a classe `section-transition` e o ref do `useScrollReveal`:

- **Hero** (`src/components/Hero.tsx`) - classe `section-transition`, anima ao carregar
- **About** (`src/components/About.tsx`) - classe `section-transition`
- **Experience** (`src/components/Experience.tsx`) - classe `section-transition-left` (variacao)
- **Projects** (`src/components/Projects.tsx`) - classe `section-transition`
- **Contact** (`src/components/Contact.tsx`) - classe `section-transition-left` (variacao)

Education, Skills e Footer permanecem sem esta transicao, mantendo o scroll-reveal atual.

### 4. Remover SectionDividers entre secoes com transicao

Os `SectionDivider` entre as secoes que terao o circle-swoop podem ser mantidos ou removidos conforme o efeito visual. Vou mante-los por enquanto pois adicionam profundidade.

## Arquivos modificados

| Arquivo | Alteracao |
|---|---|
| `src/index.css` | Adicionar CSS variables, keyframes e classes de transicao |
| `src/components/Hero.tsx` | Envolver conteudo com wrapper de transicao |
| `src/components/About.tsx` | Adicionar wrapper section-transition |
| `src/components/Experience.tsx` | Adicionar wrapper section-transition-left |
| `src/components/Projects.tsx` | Adicionar wrapper section-transition |
| `src/components/Contact.tsx` | Adicionar wrapper section-transition-left |

## Detalhes tecnicos

- A animacao usa `clip-path: circle()` que e bem suportado em navegadores modernos
- O `IntersectionObserver` do hook existente dispara a animacao uma unica vez (triggerOnce = true)
- Alternancia entre direcao direita e esquerda cria ritmo visual
- Duracao de 1.2s com `ease-out` para movimento suave e organico
