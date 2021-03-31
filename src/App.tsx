import React, { FC, useState, useEffect } from 'react';
import { Event } from './interfaces';
import { Calendar } from './components';
import { getEventService } from './services';
import {
  dayStart,
  dayEnd,
  minimumEventDuration,
  eventsToGenerate,
} from './constants';

import './App.css';

const App: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(
      getEventService(dayStart, dayEnd, minimumEventDuration, eventsToGenerate)
        .events
    );
  }, [setEvents]);

  return (
    <div className="app">
      <Calendar events={events} dayStart={dayStart} dayEnd={dayEnd} />
    </div>
  );
};

export default App;
