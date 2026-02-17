import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curve';
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'wave', 
  fromColor = '#ffffff', 
  toColor = '#f8fafc',
  flip = false 
}) => {
  const style: React.CSSProperties = flip ? { transform: 'rotate(180deg)' } : {};

  if (variant === 'wave') {
    return (
      <div className="relative -mt-1 -mb-1" style={style}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill={toColor}
          />
          <path
            d="M0,0 L0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 Z"
            fill={fromColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'diagonal') {
    return (
      <div className="relative -mt-1 -mb-1" style={style}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <polygon points="0,0 1440,0 1440,60 0,0" fill={fromColor} />
          <polygon points="0,0 1440,60 0,60" fill={toColor} />
        </svg>
      </div>
    );
  }

  // curve
  return (
    <div className="relative -mt-1 -mb-1" style={style}>
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <path d="M0,0 L0,30 Q720,80 1440,30 L1440,0 Z" fill={fromColor} />
        <path d="M0,30 Q720,80 1440,30 L1440,60 L0,60 Z" fill={toColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;
