import React from 'react';

import { isTestRunning } from '../shared/global';
import CalendarPage from '../pages/calendarPage'

const App: React.FC = () => {
//const App = () => {
  return (
    <>
      {isTestRunning? 
        <CalendarPage></CalendarPage>
      :
        <p>Тестирование завершено, приходите в другой раз!  Хорошего вам настроения :)</p>
      }
    </>
  );
};

export default App;
