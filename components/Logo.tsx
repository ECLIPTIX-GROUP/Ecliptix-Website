import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-16", withText = true }) => {
  const logoUrl = "https://media.licdn.com/dms/image/v2/D4E0BAQEDRW1wrkNA2g/company-logo_200_200/B4EZn_LZ1.GoAI-/0/1760922804191/ecliptix_group_logo?e=1770249600&v=beta&t=NWzvHcNYdQCi9_3h6LQNFYOfg5NbOerXs_sZLK5Uh8I";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Official Logo Image */}
      <img 
        src={logoUrl} 
        alt="Ecliptix Logo" 
        className="h-full w-auto object-contain rounded-xl bg-white/5 border border-white/10"
      />
      
      {/* Logo Text */}
      {withText && (
        <span className="font-bold text-2xl md:text-3xl tracking-tight text-white font-sans drop-shadow-md">
          Ecliptix
        </span>
      )}
    </div>
  );
};