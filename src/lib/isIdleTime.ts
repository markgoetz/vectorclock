import { getHours } from 'date-fns/getHours';

function isIdleTime(date: Date): boolean {
  const hour = getHours(date);
  return hour >= 1 && hour < 7;
}

export default isIdleTime;
