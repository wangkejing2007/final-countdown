export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number; // For the specific "How many hours" request
  totalMinutes: number; // For the specific "How many minutes" request
  isComplete: boolean;
}

export interface CountdownTarget {
  date: Date;
  label: string;
}
