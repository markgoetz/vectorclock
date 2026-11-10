import { getHours } from 'date-fns/getHours';
import { getMinutes } from 'date-fns/getMinutes';

function isOvernight(date: Date): boolean {
  const hour = getHours(date);
  return (hour >= 1 && hour < 7) || (hour === 7 && getMinutes(date) === 0);
}

export default isOvernight;
