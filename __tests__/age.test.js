import { Age } from './../src/age.js';

describe('Age', () => {
  const age = new Age(25);
  const ageOver = new Age(85)
  test('should only take a number for age object', () => {
      const earthAge = new Age('abc');
      expect(earthAge.posNumCheck()).toEqual("please enter a number");
  });

  // stuck here for a bit and going to keep working on this