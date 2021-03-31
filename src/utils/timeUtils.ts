import moment from 'moment';
import { TimeIntervals } from '../interfaces';
import { dayStart, dayEnd } from '../constants';

export const getRandomTimeInterval = (
  dayStart: number,
  dayEnd: number,
  minimumEventDurationInMinutes = 0
) => {
  const totalMinutesInBetween = (dayEnd - dayStart) * 60;

  const isEventLongerThanTwoHours = Math.random() < 0.2;

  const durationInMinutes =
    Math.floor(
      Math.random() * (isEventLongerThanTwoHours ? totalMinutesInBetween : 120)
    ) + minimumEventDurationInMinutes;

  const latestStartingTimeInMinutes = totalMinutesInBetween - durationInMinutes;
  const startingTimeInMinutes = Math.floor(
    Math.random() * latestStartingTimeInMinutes
  );

  const startingHour = Math.floor(startingTimeInMinutes / 60) + dayStart;
  const startingMinute = startingTimeInMinutes % 60;
  const endingHour =
    Math.floor((startingTimeInMinutes + durationInMinutes) / 60) + dayStart;
  const endingMinute = (startingTimeInMinutes + durationInMinutes) % 60;

  const start = new Date();
  const end = new Date();

  start.setHours(startingHour);
  start.setMinutes(startingMinute);
  start.setSeconds(0);
  start.setMilliseconds(0);

  end.setHours(endingHour);
  end.setMinutes(endingMinute);
  end.setSeconds(0);
  end.setMilliseconds(0);

  const startingMinutesFromDayStart =
    (startingHour - dayStart) * 60 + startingMinute;

  return { start, end, durationInMinutes, startingMinutesFromDayStart };
};

export const getIntervals = (): TimeIntervals[] => {
  const start = moment()
    .startOf('day')
    .add(dayStart - 1, 'hours');
  let intervals = [{ index: 0, time: start.format('hh:mm A') }];

  for (let i = dayStart - 1; i < dayEnd + 1; i++) {
    for (let j = 0; j < 4; j++) {
      let time = start.add(15, 'minutes');
      intervals.push({ index: i * 24 + j + 1, time: time.format('hh:mm A') });
    }
  }
  return intervals;
};
