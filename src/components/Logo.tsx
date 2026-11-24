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
    sm: 'h-11 w-11 min-w-[2.75rem]',
    md: 'h-14 w-14 sm:h-16 sm:w-16 min-w-[3.5rem] sm:min-w-[4rem]',
    lg: 'h-20 w-20 sm:h-24 sm:w-24 min-w-[5rem] sm:min-w-[6rem]',
    xl: 'h-28 w-28 sm:h-32 sm:w-32 min-w-[7rem] sm:min-w-[8rem]',
  };

  const imgElement = (
    <img 
      src="/assets/sky_traders_official_logo.jpg" 
      alt="SKY Traders — SKY Coconuts Official Logo" 
      className={`aspect-square object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      loading="eager"
      width={size === 'sm' ? 44 : size === 'md' ? 64 : size === 'lg' ? 96 : 128}
      height={size === 'sm' ? 44 : size === 'md' ? 64 : size === 'lg' ? 96 : 128}
    />
  );

  if (!badge) {
    return imgElement;
  }

  // Exact matching warm cream container (#F2E1C7) so the logo's cream background blends naturally on light or dark surfaces
  return (
    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-2xl bg-[#F2E1C7] border border-gold/40 shadow-sm hover:border-gold hover:shadow-md transition-all duration-300 group">
      {imgElement}
      {showText && (
        <div className="flex flex-col text-left pr-1.5">
          <span className="text-base sm:text-lg font-serif font-black tracking-wider text-forest-deep leading-tight">
            SKY TRADERS
          </span>
          <span className="text-[10px] font-bold tracking-widest text-leaf uppercase leading-none mt-0.5">
            SKY Coconuts • Udumalpet
          </span>
        </div>
      )}
    </div>
  );
};
