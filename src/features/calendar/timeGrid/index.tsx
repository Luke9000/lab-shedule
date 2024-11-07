import React from 'react';
import styles from './styles.module.css';

const times = ['11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00','18:00']; // Временные слоты
const zones = ['Время', 'Класс А', 'Класс Б', 'Класс В']; // Заголовки классов

type TimeGridProps = {
  children?: React.ReactNode; // Для передачи содержимого в пустые ячейки
};

const TimeGrid: React.FC<TimeGridProps> = ({ children }) => {
  return (
    <div className={styles.timeGrid}>
      {zones.map((zone, index) => (
        <div key={`zone-header-${index}`} className={styles.zoneHeader}>
          {zone}
        </div>
      ))}

      {/* Время и пустые ячейки */}
      {times.map((time, timeIndex) => (
        <React.Fragment key={timeIndex}>
          <div className={styles.timeSlot}>{time}</div>
          {zones.slice(1).map((_, zoneIndex) => (
            <div key={`slot-${timeIndex}-${zoneIndex}`} className={styles.zoneSlot}>
              {children}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimeGrid;
