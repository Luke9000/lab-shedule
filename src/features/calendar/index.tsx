
import React from 'react';
import Header from './header';
import Controls from './controls';
import TimeGrid from './timeGrid'
import EventCard from './eventCard';
import styles from './styles.module.css'


const CalendarView: React.FC = () => {
  const events = [
    { title: 'Текст', location: 'Комн. зона 1', start: '12:00', end: '13:00' },
    { title: 'Текст', location: 'Комн. зона 2', start: '15:00', end: '16:30' },
  ];

  return (
    <>
    
      <Header />
      <Controls />
     
 
        <div className={styles.wrapper}>
          <TimeGrid />
        </div>
    </>
  );
};

export default CalendarView;
