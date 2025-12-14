import { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { calculateTimeLeft } from '../utils/timeUtils';

export const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    // Immediate update on mount
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.isComplete) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
