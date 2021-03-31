import React, { FC } from 'react';
import { TimeIntervals } from '../interfaces';

import './CalendarTimes.css';

interface CalendarTimesProps {
  timeIntervals: TimeIntervals[];
}

export const CalendarTimes: FC<CalendarTimesProps> = ({ timeIntervals }) => {
  return (
    <div className="calendar-times">
      {timeIntervals.map(({ index, time }) => (
        <div key={index}>{time}</div>
      ))}
    </div>
  );
};
