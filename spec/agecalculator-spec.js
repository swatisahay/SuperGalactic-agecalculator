import { AgeCalculator } from '../src/agecalculator';

describe('AgeCalculator', function() {

  it('will convert age in seconds', function() {
    let inSeconds =new AgeCalculator(30);
    console.log(inSeconds)
    expect(inSeconds.convertAgeToSeconds()).toEqual(946702080);
  });
});
