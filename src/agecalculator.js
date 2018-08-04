export class AgeCalculator {
  constructor(age, currentdate, birthdate, gender){
    this.age = age;
    this.currentDate = currentdate;
    this.birthDate = birthdate;

  }
  convertAgeToSeconds(){
    let ageInSeconds= Math.floor(this.age * 365.24 * 24 *60 *60);
    return ageInSeconds;
  }

 DiffBtw2Dates(){
   let difference=Math.abs((this.currentDate-this.birthDate)/(1000));
   return difference;
 }
 MercuryYears(){
   //1 mercury year = .24 earth year
   let mercuryYear=Math.floor(this.age/.24);
   return mercuryYear;
 }
 VenusYears(){
   //1 venus year = .62 earth year
   let venusYear=Math.floor(this.age/.62);
   return venusYear;
 }
 MarsYears(){
   //1 venus year = .62 earth year
   let marsYear=Math.floor(this.age/1.88);
   return marsYear;
 }
 JupiterYears(){
   //1 venus year = .62 earth year
   let jupiterYear=Math.floor(this.age/11.86);
   return jupiterYear;
 }
 LifeExpectancy(gender, planet){
     if(gender==="female" || gender==="Female"){
       let yearsLifeExpectancy=72;
      let livingYearsLeft= this.yearLeftToLive(yearsLifeExpectancy, planet);
      return livingYearsLeft;

     }
     else if(gender==="male" || gender=== "Male"){
       let yearsLifeExpectancy=68;
       let livingYearsLeft= this.yearLeftToLive(yearsLifeExpectancy, planet);
       return livingYearsLeft;
     }
     else{
       let yearsLifeExpectancy= 70;
       let livingYearsLeft = this.yearLeftToLive(yearsLifeExpectancy, planet);
       return livingYearsLeft;
     }
 }
 yearLeftToLive(LifeExpectancy, planet){
   let yearsLeft = 0;
     if(planet==="earth")
     {
       yearsLeft= LifeExpectancy-this.age;
     }
    else if(planet==="mercury")
    {
      yearsLeft= LifeExpectancy-this.MercuryYears();
    }
    else if(planet==="venus")
    {
      yearsLeft= LifeExpectancy-this.VenusYears();
    }
    else if(planet==="mars")
    {
      yearsLeft= LifeExpectancy-this.MarsYears();
    }
    else if(planet==="jupiter")
     {
       yearsLeft= LifeExpectancy-this.JupiterYears();
     }
    if(yearsLeft>0){
      let outputAge= +yearsLeft+ " years left to live in this planet";
      return outputAge;
    }
    else
    {
      let outputAge= "your living years have  exceeded your life expectancy by" + Math.abs(yearsLeft);
      return outputAge;
    }

 //   let yearLeftOnVenus= LifeExpectancy-VenusYears(this.age);
 //   let yearLeftOnMars= LifeExpectancy-MarsYears(this.age);
 //   let yearLeftOnJupiter= LifeExpectancy-JupiterYears(this.age);
 //

}
}
