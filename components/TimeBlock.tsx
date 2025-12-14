import React from 'react';
import { padNumber } from '../utils/timeUtils';

interface TimeBlockProps {
  value: number;
  label: string;
  isImportant?: boolean;
}

export const TimeBlock: React.FC<TimeBlockProps> = ({ value, label, isImportant = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`
          relative flex items-center justify-center 
          w-28 h-36 sm:w-40 sm:h-52 md:w-56 md:h-72 lg:w-64 lg:h-80
          rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl
          ${isImportant ? 'bg-white/10 text-white' : 'bg-black/20 text-gray-200'}
          transition-all duration-300 transform hover:scale-105
        `}
      >
        <span className={`font-mono font-bold text-6xl sm:text-8xl md:text-9xl ${isImportant ? 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]' : ''}`}>
          {padNumber(value)}
        </span>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none"></div>
      </div>
      <span className="mt-4 text-sm sm:text-lg md:text-2xl font-medium tracking-widest uppercase text-white/60">
        {label}
      </span>
    </div>
  );
};