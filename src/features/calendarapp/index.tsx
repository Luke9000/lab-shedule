import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCallback, useMemo, useState } from 'react';
import {EVENTS} from "./events";
// import 'moment/locale/ru';
import Controls from './controls';
import 'moment/dist/locale/ru'

import styles from './styles.module.css'


moment().locale('ru')
const localizer = momentLocalizer(moment) // or globalizeLocalizer
// const localizer = globalizeLocalizer(globalize)



const DateCalendar = () => {


  const [date, setDate] = useState<Date>(moment().toDate());

  // const filteredEvents = useMemo(() => {
  //   return EVENTS.filter(event => moment(event.start).isSame(date, 'day'));
  // }, [date]);

  const onNextClick = useCallback(() => {
      setDate(moment(date).add(1, "d").toDate());
  }, [date]);

  const onNext2Click = useCallback(() => {
    setDate(moment(date).add(2, "d").toDate());
}, [date]);

  const onPrevClick = useCallback(() => {
    setDate(moment(date).subtract(1, "d").toDate());
}, [date]);


  const dateText = useMemo(() => {
    return moment(date).format("dddd, MMMM DD");
  }, [date]);



  const getDateText = (date:Date, daysToAdd = 0) => {
    const modifiedDate = moment(date).add(daysToAdd, 'days');
    return {
      number: modifiedDate.format("DD"),
      word: modifiedDate.format("dd")
    };
  };

  
  const currentDateText = useMemo(() => getDateText(date), [date]);
  const nextDayText = useMemo(() => getDateText(date, 1), [date]);
  const nextDay2Text = useMemo(() => getDateText(date, 2), [date]);
  const prevDayText = useMemo(() => getDateText(date, -1), [date]);

  return (
    <>

      <h3>{dateText}</h3>

      <Controls 
      currentDateText={currentDateText} 
      nextDayText={nextDayText} 
      nextDay2Text={nextDay2Text} 
      prevDayText={prevDayText}
      onNextClick={onNextClick} 
      onNext2Click={onNext2Click} 
      onPrevClick={onPrevClick}
      />
      
      <Calendar
        formats={{
          dayFormat: 'DD.MM.YYYY',
          timeGutterFormat: 'HH:mm',
          eventTimeRangeFormat: ({ start, end }) => `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`, 
        }}
        events={EVENTS}
        className={styles.calendar}
        culture="ru"
        localizer={localizer}
        date={date}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        toolbar={false}
        defaultView={Views.DAY}
        min={moment().set({ hour: 8, minute: 0 }).toDate()} 
        max={moment().set({ hour: 22, minute: 0 }).toDate()} 
        dayLayoutAlgorithm="no-overlap"
      />

    </>
  );
};

export default DateCalendar