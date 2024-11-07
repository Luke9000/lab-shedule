import clsx from 'clsx';
import Button from '../../../shared/ui/button/Button';
import styles from './styles.module.css'

interface ControlsProps {
    currentDateText: { word: string; number: string };
    nextDayText: { word: string; number: string };
    nextDay2Text: { word: string; number: string };
    prevDayText: { word: string; number: string };
    onNextClick: () => void;
    onNext2Click: () => void;
    onPrevClick: () => void;
  }

  const Controls: React.FC<ControlsProps> = ({
    currentDateText,
    nextDayText,
    nextDay2Text,
    prevDayText,
    onNextClick,
    onNext2Click,
    onPrevClick,
  }) => {

  return (

    <div className={styles.controlsWrapper}>
      <div className={styles.buttonWrapper}>
            <h3>{prevDayText.word}</h3>
            <Button 
              onClick={onPrevClick}
              className={styles.button} 
              text={prevDayText.number}> 
            </Button>
      </div>
      <div className={styles.buttonWrapper}>
            <h3>{currentDateText.word}</h3>
            <Button 
              disabled = {true}
              className={clsx(styles.button,styles.currentButton)} 
              text={currentDateText.number}> 
            </Button>
      </div>
      <div className={styles.buttonWrapper}>
            <h3>{nextDayText.word}</h3>
            <Button 
              onClick={onNextClick}
              className={styles.button} 
              text={nextDayText.number}> 
            </Button>
      </div>
      <div className={styles.buttonWrapper}>
            <h3>{nextDay2Text.word}</h3>
            <Button 
              onClick={onNext2Click}
              className={styles.button} 
              text={nextDay2Text.number}> 
            </Button>
      </div>
    </div>

  );
};

export default Controls