import React, { FC, useEffect, useState } from 'react';
import { Event, TimeIntervals } from '../interfaces';
import { getIntervals } from '../utils';
import { CalendarTimes } from './CalendarTimes';
import { CalendarEvent } from './CalendarEvent';

import './Calendar.css';

export interface CalendarInProps {
  dayStart: number;
  dayEnd: number;
  events: Event[];
}

export const Calendar: FC<CalendarInProps> = ({ events, dayStart }) => {
  const [timeIntervals, setTimeIntervals] = useState<TimeIntervals[]>([]);

  useEffect(() => {
    setTimeIntervals(getIntervals());
  }, [setTimeIntervals]);

  return (
    <div className="calendar-container">
      <CalendarTimes timeIntervals={timeIntervals} />
      <div className="calendar-grid"></div>
      <div className="calendar-events">
        {events.map((event) => {
          if (event.overlappingEvents === 0) {
            return (
              <div className="calendar-row">
                <CalendarEvent key={event.id} event={event} />
              </div>
            );
          }
          return <CalendarEvent key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
};
