import { Event } from '../interfaces/Event';

export class EventService {
  constructor(
    private people: string[],
    private teams: string[],
    private activities: string[],
    private dayStart: number,
    private dayEnd: number,
    private minimumEventDurationInMinutes: number,
    private eventsToGenerate: number,
    private getElementFromArray: (
      arr: any[],
      numOfElements?: number
    ) => string[],
    private getTime: (
      dayStart: number,
      dayEnd: number,
      minimumEventDurationInMinutes?: number
    ) => {
      start: Date;
      end: Date;
      durationInMinutes: number;
      startingMinutesFromDayStart: number;
    }
  ) {
    this._events = [];
    this.generateEvents(this.eventsToGenerate);
    this._events.sort((a, b) => (a.start < b.start ? -1 : 1));
    this.calculateOverlappingEvents();
  }

  private _events: Event[];

  public get events(): Event[] {
    return this._events;
  }

  private generateEvents(eventsToGenerate: number) {
    for (let i = 0; i < eventsToGenerate; i++) {
      this._events.push(this.getEvent());
    }
  }

  // TODO currently O(n^2), can be better?
  private calculateOverlappingEvents() {
    for (let i = 0; i < this._events.length; i++) {
      for (let j = 0; j < this._events.length; j++) {
        if (i !== j && (
          (j > i && this._events[i].end > this._events[j].start) ||
          (j < i && this._events[j].end > this._events[i].start) 
        )
          ) {
          this._events[i].overlappingEvents++;
        }
      }
    }
  }

  private getEvent(): Event {
    const {
      start,
      end,
      durationInMinutes,
      startingMinutesFromDayStart,
    } = this.getTime(
      this.dayStart,
      this.dayEnd,
      this.minimumEventDurationInMinutes
    );
    return {
      id: this.getEventId(),
      name: this.getEventName(),
      start,
      end,
      startingMinutesFromDayStart,
      durationInMinutes,
      overlappingEvents: 0,
    };
  }

  private getEventName(): string {
    const activity = this.getElementFromArray(this.activities);

    const isTeam = Math.floor(Math.random()) > 0.5;

    if (isTeam) {
      const team = this.getElementFromArray(this.teams);
      return `${team} ${activity}`;
    } else {
      const numberOfAttendees = Math.floor(Math.random() * 3) + 1;
      let attendees = this.getElementFromArray(this.people, numberOfAttendees);
      return `${attendees.join(' ')} ${activity}`;
    }
  }

  private getEventId(): number {
    return parseInt(`${Math.floor(Math.random() * 100000)}`, 10);
  }
}
