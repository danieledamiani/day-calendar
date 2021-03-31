export const getRandomElementFromArrayOfStrings = (
  arr: string[],
  howManyElements?: number
): string[] => {
  if (howManyElements) {
    let elementsLeft = howManyElements;
    const elements: { [element: string]: boolean } = {};
    let element: string;
    while (elementsLeft) {
      element = arr[Math.floor(Math.random() * arr.length)];
      if (elements[element] === undefined) {
        elements[element] = true;
        elementsLeft--;
      }
    }

    return Object.keys(elements);
  }

  return [arr[Math.floor(Math.random() * arr.length)]];
};

export const getEventStyle = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const backgroundColor = `rgb(${r},${g},${b})`;

  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);

  const color = brightness > 125 ? 'black' : 'white';
  return { backgroundColor, color };
};

export const PEOPLE = [
  'Alice',
  'Bob',
  'Carl',
  'Diane',
  'Emily',
  'Fabrizio',
  'Gianni',
  'Hannah',
];

export const TEAMS = ['TEAM ALPHA', 'TEAM BETA', 'BOARD'];

export const ACTIVITIES = [
  'Meeting',
  'Discussion',
  'Standup',
  'Planning',
  'Conference',
  'Backlog Grooming',
  'All hands',
  'Brown Bag',
];
