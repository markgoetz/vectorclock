import { format } from "date-fns/format";
import { DATE_FORMAT, TIME_FORMAT } from "../consts/dateFormats";
import styles from "./FullClock.module.css";

interface FullClockProps {
  now: Date;
}

function FullClock({ now }: FullClockProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.time}>{format(now, TIME_FORMAT)}</div>
      <div className={styles.date}>{format(now, DATE_FORMAT)}</div>
    </div>
  );
}

export default FullClock;
