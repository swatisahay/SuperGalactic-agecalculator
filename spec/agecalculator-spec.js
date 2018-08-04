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
    let planet = "earth"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 38 + " years left to live in this planet");
  });
  it('will calculate age left to live with given life expectancy on earth for female', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "female"
    let planet = "earth"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 42 + " years left to live in this planet");
  });
  it('will calculate age left to live with given life expectancy on earth for other', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "others";
    let planet = "earth"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 40 + " years left to live in this planet");
  });
  it('will check for life exceeds the life expectancy', function() {
    let humanAge =new AgeCalculator(100);
    let gender = "female"
    let planet = "earth"
    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual("your living years have  exceeded your life expectancy by" + 28);
  });
  it('will calculate age exceeds life expectancy mercury ', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "female"
    let planet = "mercury"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual("your living years have  exceeded your life expectancy by" + 53);
  });
  it('will calculate age left to live with given life expectancy mercury ', function() {
    let humanAge =new AgeCalculator(3);
    let gender = "female"
    let planet = "mercury"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 60 + " years left to live in this planet");
  });
  it('will calculate age exceeds life expectancy venus ', function() {
    let humanAge =new AgeCalculator(50);
    let gender = "female"
    let planet = "venus"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual("your living years have  exceeded your life expectancy by" + 8);
  });
  it('will calculate age left to live with given life expectancy venus ', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "female"
    let planet = "venus"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 24 + " years left to live in this planet");
  });
  it('will calculate age exceeds life expectancy mars ', function() {
    let humanAge =new AgeCalculator(150);
    let gender = "female"
    let planet = "mars"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual("your living years have  exceeded your life expectancy by" + 7);
  });
  it('will calculate age left to live with given life expectancy mars ', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "female"
    let planet = "mars"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 57 + " years left to live in this planet");
  });
  it('will calculate age exceeds life expectancy jupiter ', function() {
    let humanAge =new AgeCalculator(1200);
    let gender = "female"
    let planet = "jupiter"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual("your living years have  exceeded your life expectancy by" + 29);
  });
  it('will calculate age left to live with given life expectancy jupiter ', function() {
    let humanAge =new AgeCalculator(30);
    let gender = "female"
    let planet = "jupiter"

    // console.log(inSeconds)
    expect(humanAge.LifeExpectancy(gender, planet)).toEqual(+ 70 + " years left to live in this planet");
  });

});
