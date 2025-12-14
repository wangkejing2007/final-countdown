import { TimeLeft } from '../types';

export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalHours: 0,
      totalMinutes: 0,
      isComplete: true,
    };
  }

  // Basic Unit Breakdown
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  // Totals for specific query support
  const totalHours = Math.floor(difference / (1000 * 60 * 60));
  const totalMinutes = Math.floor(difference / (1000 * 60));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalHours,
    totalMinutes,
    isComplete: false,
  };
};

export const padNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};
