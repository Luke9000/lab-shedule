import React from 'react';
import Button from '../../../shared/ui/button/Button';
import styles from './styles.module.css'

const Controls: React.FC = () => {

const days = ['15', '16', '17', '18'];
  const handleClick = (day: string) => {
    console.log(`Selected day: ${day}`);
  };

  return (
    <div className={styles.wrapper}>
      {days.map((day) => (
        <div className={styles.buttonWrapper}>
          <h3>Чт</h3>
          <Button className={styles.button} text={day}> 
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Controls;
