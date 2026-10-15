import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark'; // 'light' is on dark backgrounds (white logo), 'dark' is on white/light backgrounds (forest-green symbol and dark wordmark)
  showTagline?: boolean;
  symbolOnly?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showTagline = false,
  symbolOnly = false,
  className = '',
}) => {
  const isLightOnDark = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric C mark */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg shadow-sm">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          {/* Background container */}
          <rect
            width="36"
            height="36"
            rx="9"
            fill={isLightOnDark ? '#15332C' : '#102A24'}
          />
          {/* Geometric C Arc */}
          <path
            d="M23.5 11.5C21.8 10.2 19.8 9.5 17.5 9.5C12.8 9.5 9 13.3 9 18C9 22.7 12.8 26.5 17.5 26.5C19.8 26.5 21.8 25.8 23.5 24.5"
            stroke={isLightOnDark ? '#FFFFFF' : '#B8D8C0'}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Geometric nodes / connection vertices */}
          <circle cx="23.5" cy="11.5" r="2" fill={isLightOnDark ? '#B8D8C0' : '#FFFFFF'} />
          <circle cx="23.5" cy="24.5" r="2" fill={isLightOnDark ? '#B8D8C0' : '#FFFFFF'} />
          {/* Center neural node */}
          <circle cx="17.5" cy="18" r="2.2" fill={isLightOnDark ? '#B8D8C0' : '#B8D8C0'} />
          {/* Subtle neural connecting line to center */}
          <line
            x1="12"
            y1="18"
            x2="15.3"
            y2="18"
            stroke={isLightOnDark ? '#789985' : '#789985'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {!symbolOnly && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span
              className={`font-bold tracking-tight text-xl ${
                isLightOnDark ? 'text-white' : 'text-forest-deep'
              }`}
            >
              Cogni<span className={isLightOnDark ? 'text-mint' : 'text-forest-deep font-extrabold'}>Hire</span>
            </span>
          </div>
          {showTagline && (
            <span
              className={`text-[10px] tracking-wider uppercase font-medium -mt-1 ${
                isLightOnDark ? 'text-sage-light' : 'text-ink-muted'
              }`}
            >
              Intelligent Hiring
            </span>
          )}
        </div>
      )}
    </div>
  );
};
