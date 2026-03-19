import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border:      'hsl(var(--border))',
        input:       'hsl(var(--input))',
        ring:        'hsl(var(--ring))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT:             'hsl(var(--sidebar-background))',
          foreground:          'hsl(var(--sidebar-foreground))',
          primary:             'hsl(var(--sidebar-primary))',
          'primary-foreground':'hsl(var(--sidebar-primary-foreground))',
          accent:              'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border:              'hsl(var(--sidebar-border))',
          ring:                'hsl(var(--sidebar-ring))'
        },
        neon: {
          DEFAULT: '#00ff87',
          50:  '#e6fff3',
          100: '#b3ffe0',
          200: '#80ffcc',
          300: '#4dffb8',
          400: '#1affa4',
          500: '#00ff87',
          600: '#00cc6c',
          700: '#009951',
          800: '#006636',
          900: '#00331b',
        },
        electric: {
          DEFAULT: '#4d8cff',
          50:  '#eef4ff',
          100: '#d4e3ff',
          200: '#a8c7ff',
          300: '#7dabff',
          400: '#4d8cff',
          500: '#2970e6',
          600: '#1a56b3',
          700: '#0d3d80',
          800: '#06254d',
          900: '#020e1a',
        },
        surface:  '#111118',
        dim:      '#2a2a35',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' }
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' }
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' }
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,255,135,0.15), 0 0 60px rgba(0,255,135,0.05)' },
          '50%':      { boxShadow: '0 0 30px rgba(0,255,135,0.3), 0 0 80px rgba(0,255,135,0.1)' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 135, 0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(0, 255, 135, 0.6)' }
        },
        'glow-float': {
          '0%, 100%': { opacity: '0.08', transform: 'scale(1)' },
          '50%':      { opacity: '0.2',  transform: 'scale(1.3)' }
        },
        'stagger-up': {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'fade-up':        'fade-up 0.6s ease-out forwards',
        'fade-in-left':   'fade-in-left 0.6s ease-out forwards',
        'fade-in-right':  'fade-in-right 0.6s ease-out forwards',
        shimmer:          'shimmer 2s linear infinite',
        float:            'float 3s ease-in-out infinite',
        marquee:          'marquee 30s linear infinite',
        'neon-pulse':     'neon-pulse 3s ease-in-out infinite',
        'glow-pulse':     'glow-pulse 2s ease-in-out infinite',
        'glow-float':     'glow-float 6s ease-in-out infinite',
        'stagger-up':     'stagger-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      fontFamily: {
        display: ['Clash Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['EB Garamond', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        xs:    'var(--shadow-xs)',
        sm:    'var(--shadow-sm)',
        md:    'var(--shadow-md)',
        lg:    'var(--shadow-lg)',
        xl:    'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'neon':        '0 0 20px rgba(0,255,135,0.15), 0 0 60px rgba(0,255,135,0.05)',
        'neon-strong': '0 0 30px rgba(0,255,135,0.3), 0 0 80px rgba(0,255,135,0.1)',
        'blue-glow':   '0 0 20px rgba(77,140,255,0.15), 0 0 60px rgba(77,140,255,0.05)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
