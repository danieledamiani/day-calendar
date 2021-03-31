import {} from '../utils/eventHelpers';
import { EventService } from './EventService';
import { getEventService } from './getEventService';

describe('EventService', () => {
  it('should hold a list of 10 events', () => {
    const dayStart = 10;
    const dayEnd = 17;
    const minimumEventDuration = 10;
    const eventsToGenerate = 4;
    const eventService: EventService = getEventService(dayStart, dayEnd, minimumEventDuration, eventsToGenerate);
    const events = eventService.events;
    expect(events.length).toBe(4);
  });
});
