import { Zap } from 'lucide-react';
import type { ImgHTMLAttributes } from 'react';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
}

export default function Logo({ src, className, ...props }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {src ? (
        <img
          src={src}
          alt="Logo"
          className="h-10 w-10 object-contain rounded-xl"
          {...props}
        />
      ) : (
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-xl">
          <Zap className="h-8 w-8 text-white" />
        </div>
      )}
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
        Landing Ariel Torricos
      </span>
    </div>
  );
}