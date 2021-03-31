import React, { CSSProperties, FC } from 'react';
import moment from 'moment';
import { getEventStyle } from '../utils';
import { Event } from '../interfaces';

import './CalendarEvent.css';

interface CalendarEventInProps {
  event: Event;
}
export const CalendarEvent: FC<CalendarEventInProps> = ({
  event: {
    start,
    durationInMinutes,
    startingMinutesFromDayStart,
    name,
    overlappingEvents = 0,
  },
}) => {
  const { backgroundColor, color } = getEventStyle();

  const eventStyle: CSSProperties = {
    marginTop: `${startingMinutesFromDayStart}px`,
    height: `${durationInMinutes}px`,
    color,
    backgroundColor,
  };

  const startingTime = moment(start).format('hh:mm A');

  return (
    <div
      className={`calendar-event-${overlappingEvents} calendar-event`}
      style={eventStyle}
      title={name}
    >
      <div className="calendar-event-time">{startingTime}</div>
      <div className="calendar-name">
        {name}
      </div>
    </div>
  );
};
