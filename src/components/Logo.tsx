import React from 'react';

interface LogoProps {
  className?: string;
  badge?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  badge = true,
  size = 'md',
  showText = true,
}) => {
  // Sizing preserving perfect 1:1 aspect ratio without any crop, stretch or distortion
  const sizeClasses = {
    sm: 'h-10 w-10 min-w-[2.5rem]',
    md: 'h-12 w-12 sm:h-14 sm:w-14 min-w-[3rem] sm:min-w-[3.5rem]',
    lg: 'h-16 w-16 sm:h-20 sm:w-20 min-w-[4rem] sm:min-w-[5rem]',
    xl: 'h-24 w-24 sm:h-28 sm:w-28 min-w-[6rem] sm:min-w-[7rem]',
  };

  const imgElement = (
    <img 
      src="/assets/sky_traders_official_logo.jpg" 
      alt="SKY Traders — SKY Coconuts Official Logo" 
      className={`aspect-square object-contain rounded-lg transition-transform duration-300 ${sizeClasses[size]} ${className}`}
      loading="eager"
      width={size === 'sm' ? 40 : size === 'md' ? 56 : size === 'lg' ? 80 : 112}
      height={size === 'sm' ? 40 : size === 'md' ? 56 : size === 'lg' ? 80 : 112}
    />
  );

  if (!badge) {
    return imgElement;
  }

  // Exact matching warm cream container (#F6E3C5) so the logo's cream background blends naturally on light or dark surfaces
  return (
    <div className="inline-flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl bg-[#F6E3C5] border border-gold/40 shadow-sm hover:border-gold transition-all duration-300 group">
      {imgElement}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-sm sm:text-base font-black tracking-wider text-forest-deep leading-tight font-display">
            SKY TRADERS
          </span>
          <span className="text-[9px] font-bold tracking-widest text-leaf uppercase leading-none mt-0.5">
            SKY Coconuts • Udumalpet
          </span>
        </div>
      )}
    </div>
  );
};
