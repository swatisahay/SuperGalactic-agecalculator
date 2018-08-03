import { AgeCalculator } from '../src/agecalculator';

describe('AgeCalculator', function() {

  it('will convert age in seconds', function() {
    let inSeconds =new AgeCalculator(30);
    console.log(inSeconds)
    expect(inSeconds.convertAgeToSeconds()).toEqual(946702080);
  });
  it('will find difference between 2 dates in seconds', function() {
    let currentDate=new Date(2018, 8, 27);
    let birthDate=new Date(1988, 8, 27);
    let diffDate= new AgeCalculator(0, currentDate, birthDate);
    expect(diffDate.DiffBtw2Dates()).toEqual(946684800);
  });
});
