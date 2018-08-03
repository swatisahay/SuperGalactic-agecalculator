export class AgeCalculator {
  constructor(age, currentdate, birthdate){
    this.age = age;
    this.currentDate = currentdate;
    this.birthDate = birthdate;
  }
  convertAgeToSeconds(){
    let ageInSeconds= Math.floor(this.age * 365.24 * 24 *60 *60);
    return ageInSeconds;
  }
}
