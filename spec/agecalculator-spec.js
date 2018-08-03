import { AgeCalculator } from '../src/agecalculator';

describe('AgeCalculator', function() {

  it('will convert age in seconds', function() {
    let ageInSeconds = new AgeCalculator(30)
    expect(ageInSeconds.convertAgeToSeconds()).toEqual(946,708,560);
  });
});
