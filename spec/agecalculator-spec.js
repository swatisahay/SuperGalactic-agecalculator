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
  it('will calculate age left to live with given life expectancy on earth for male ', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "male"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender)).toEqual(+ 38 + "left on earth");
  });
  it('will calculate age left to live with given life expectancy on earth for female', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "female"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender)).toEqual(+ 42 + "left on earth");
  });
  it('will calculate age left to live with given life expectancy on earth for other', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "others";
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender)).toEqual(+ 40 + "left on earth");
  });
  it('will check for life exceeds the life expectancy', function() {
    let humanAge =new AgeCalculator(100);
    let gender = "female"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender)).toEqual("your year on earth exceeds life expectancy by" + 28);
  });

});
