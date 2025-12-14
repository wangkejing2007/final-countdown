import React from 'react';
import { Calendar } from 'lucide-react';
import { useCountdown } from './hooks/useCountdown';
import { TARGET_DATE } from './constants';
import { TimeBlock } from './components/TimeBlock';

const App: React.FC = () => {
  const timeLeft = useCountdown(TARGET_DATE.date);

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-gradient-x z-0"></div>
      
      {/* Mesh Gradients (Orbs) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Card */}
      <main className="relative z-10 p-4 w-full max-w-[95vw] flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg mb-2">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-purple-300" />
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-purple-100">{TARGET_DATE.label}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 drop-shadow-lg">
            Project Countdown
          </h1>
          <p className="text-white/60 text-xl md:text-3xl font-light">
            Counting down until the big day.
          </p>
        </div>

        {/* Timer Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-4">
           <TimeBlock value={timeLeft.days} label="Days" />
           <TimeBlock value={timeLeft.hours} label="Hours" isImportant />
           <TimeBlock value={timeLeft.minutes} label="Minutes" isImportant />
        </div>

      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center w-full z-10">
        <p className="text-white/20 text-sm md:text-base font-mono">
          SYSTEM TIME: {new Date().toLocaleTimeString()}
        </p>
      </footer>
    </div>
  );
};

export default App;