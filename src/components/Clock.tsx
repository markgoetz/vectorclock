import { useEffect, useState } from 'react';
import { format } from 'date-fns/format';
import styles from './Clock.module.css';

function Clock() {
  const [time, setTime] = useState('00:00 AM');
  const [date, setDate] = useState('00-00-0000');

  useEffect(() => {
    const id = window.setInterval(() => {
      const d = new Date();
      setTime(format(d, 'hh:mm a'));
      setDate(format(d, 'MM-dd-yyyy'));
    }, 500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.time}>{time}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}

export default Clock;
