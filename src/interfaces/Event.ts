export interface Event {
  id: number;
  name: string;
  start: Date;
  end: Date;
  startingMinutesFromDayStart: number;
  durationInMinutes: number;
  overlappingEvents: number;
}
