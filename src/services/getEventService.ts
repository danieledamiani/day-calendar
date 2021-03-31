import {
  PEOPLE,
  TEAMS,
  ACTIVITIES,
  getRandomElementFromArrayOfStrings,
  getRandomTimeInterval,
} from '../utils';
import { EventService } from './EventService';

let eventService: EventService;
export const getEventService = (dayStart: number, dayEnd: number, minimumEventDuration: number, eventsToGenerate: number): EventService => {
  if (!eventService) {
    eventService = new EventService(
      PEOPLE,
      TEAMS,
      ACTIVITIES,
      dayStart,
      dayEnd,
      minimumEventDuration,
      eventsToGenerate,
      getRandomElementFromArrayOfStrings,
      getRandomTimeInterval
    );
  }

  return eventService;
};
