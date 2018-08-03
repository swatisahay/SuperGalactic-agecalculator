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
 LifeExpectancy(gender){
     if(gender==="female" || gender==="Female"){
       let yearsLifeExpectancy=72;
      let livingYearsLeft= this.yearLeftToLive(yearsLifeExpectancy);
      return livingYearsLeft;

     }
     else if(gender==="male" || gender=== "Male"){
       let yearsLifeExpectancy=68;
       let livingYearsLeft= this.yearLeftToLive(yearsLifeExpectancy);
       return livingYearsLeft;
     }
     else{
       let yearsLifeExpectancy= 70;
       let livingYearsLeft = this.yearLeftToLive(yearsLifeExpectancy);
       return livingYearsLeft;
     }
 }
 yearLeftToLive(LifeExpectancy){
   let yearLeftOnEarth= LifeExpectancy-this.age;
   if(yearLeftOnEarth>0){
     let outputAge= +yearLeftOnEarth+ "left on earth";
     return outputAge;
   }
   else{
     let outputAge= "your year on earth exceeds life expectancy by" + Math.abs(yearLeftOnEarth);
     return outputAge;
   }

 //   let yearLeftOnMercury= LifeExpectancy-MercuryYears(this.age);
 //   let yearLeftOnVenus= LifeExpectancy-VenusYears(this.age);
 //   let yearLeftOnMars= LifeExpectancy-MarsYears(this.age);
 //   let yearLeftOnJupiter= LifeExpectancy-JupiterYears(this.age);
 //
 }

 }
