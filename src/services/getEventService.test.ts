import { EventService } from './EventService';
import { getEventService } from './getEventService';

describe('getEventService', () => {
  const dayStart = 10;
  const dayEnd = 17;
  const minimumEventDuration = 10;
  const eventsToGenerate = 4;

  it('should be defined', () => {
    expect(getEventService).toBeDefined();
  });

  it('should return always the same instance of EventService', () => {
    const firstCall = getEventService(dayStart, dayEnd, minimumEventDuration, eventsToGenerate);
    const secondCall = getEventService(dayStart, dayEnd, minimumEventDuration, eventsToGenerate);

    expect(firstCall).toBeInstanceOf(EventService);
    expect(secondCall).toBeInstanceOf(EventService);
    expect(firstCall).toBe(secondCall);
  });
});
