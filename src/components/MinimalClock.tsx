import { format } from 'date-fns/format';
import { TIME_FORMAT } from '../consts/dateFormats';
import styles from './MinimalClock.module.css';

interface MinimalClockProps {
  now: Date;
}

function MinimalClock({ now }: MinimalClockProps) {
  return <div className={styles.time}>{format(now, TIME_FORMAT)}</div>;
}

export default MinimalClock;
