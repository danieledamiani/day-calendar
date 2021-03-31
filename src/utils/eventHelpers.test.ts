import { PEOPLE, getRandomElementFromArrayOfStrings } from './eventHelpers';

describe('getRandomElementFromArrayOfStrings', () => {
  it('should return a single person if no second parameter', () => {
    const people = getRandomElementFromArrayOfStrings(PEOPLE);
    expect(people.length).toBe(1);
  });

  it('should return a single person when second parameter is 0', () => {
    const people = getRandomElementFromArrayOfStrings(PEOPLE, 0);
    expect(people.length).toBe(1);
  });

  it('should return a single person when second parameter is 1', () => {
    const people = getRandomElementFromArrayOfStrings(PEOPLE, 1);
    expect(people.length).toBe(1);
  });

  it('should return 3 people', () => {
    const people = getRandomElementFromArrayOfStrings(PEOPLE, 3);
    expect(people.length).toBe(3);
  });
});
