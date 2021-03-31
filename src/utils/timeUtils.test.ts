import { getRandomTimeInterval } from './timeUtils';

describe('getRandomTimeInterval', () => {
  it('should return a time interval between start and end time', () => {
    const { start, end } = getRandomTimeInterval(10, 21);
    expect(start).toBeInstanceOf(Date);
    expect(end).toBeInstanceOf(Date);
  });

  it('should return a time interval between start and end time and a duration', () => {
    const { start, end, durationInMinutes } = getRandomTimeInterval(11, 12, 30);
    expect(start).toBeInstanceOf(Date);
    expect(end).toBeInstanceOf(Date);
    expect(durationInMinutes >= 30).toBeTruthy();
  });
});
