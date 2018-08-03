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
  it('will calculate age of humans in mercury planet', function() {
    let humanAge =new AgeCalculator(30);
    // console.log(inSeconds)
    expect(humanAge.MercuryYears()).toEqual(125);
  });
  it('will calculate age of humans in venus planet', function() {
    let humanAge =new AgeCalculator(30);
    // console.log(inSeconds)
    expect(humanAge.VenusYears()).toEqual(48);
  });
  it('will calculate age of humans in mars planet', function() {
    let humanAge =new AgeCalculator(30);
    // console.log(inSeconds)
    expect(humanAge.MarsYears()).toEqual(15);
  });
  it('will calculate age of humans in jupiter planet', function() {
    let humanAge =new AgeCalculator(30);
    // console.log(inSeconds)
    expect(humanAge.JupiterYears()).toEqual(2);
  });

});
