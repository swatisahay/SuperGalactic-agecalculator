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
     if(planet==="earth")
     {
       let yearLeftOnEarth= LifeExpectancy-this.age;
     if(yearLeftOnEarth>0){
       let outputAge= +yearLeftOnEarth+ "left on earth";
       return outputAge;
     }
     else{
       let outputAge= "your year on earth exceeds life expectancy by" + Math.abs(yearLeftOnEarth);
       return outputAge;
     }
   }
    else if(planet==="mercury")
    {
     let yearLeftOnMercury= LifeExpectancy-this.MercuryYears();
     if(yearLeftOnMercury>0){
       let outputAge= +yearLeftOnMercury+ "left on mercury";
       return outputAge;
     }
     else{
       let outputAge= "your year on mercury exceeds life expectancy by" + Math.abs(yearLeftOnMercury);
       return outputAge;
     }
  }
  else if(planet==="venus")
    {
     let yearLeftOnVenus= LifeExpectancy-this.VenusYears();
     if(yearLeftOnVenus>0){
       let outputAge= +yearLeftOnVenus + " years left on venus";
       return outputAge;
     }
     else{
       let outputAge= "your year on venus exceeds life expectancy by" + Math.abs(yearLeftOnVenus);
       return outputAge;
     }
  }
  else if(planet==="mars")
    {
     let yearLeftOnMars= LifeExpectancy-this.MarsYears();
     if(yearLeftOnMars>0){
       let outputAge= +yearLeftOnMars+ " years left on mars";
       return outputAge;
     }
     else{
       let outputAge= "your year on mars exceeds life expectancy by" + Math.abs(yearLeftOnMars);
       return outputAge;
     }
   }
  else if(planet==="jupiter")
     {
      let yearLeftOnJupiter= LifeExpectancy-this.JupiterYears();
      if(yearLeftOnJupiter>0){
        let outputAge= +yearLeftOnJupiter+ "years left on jupiter";
        return outputAge;
      }
      else
      {
        let outputAge= "your year on jupiter exceeds life expectancy by" + Math.abs(yearLeftOnJupiter);
        return outputAge;
      }
    }
 //   let yearLeftOnVenus= LifeExpectancy-VenusYears(this.age);
 //   let yearLeftOnMars= LifeExpectancy-MarsYears(this.age);
 //   let yearLeftOnJupiter= LifeExpectancy-JupiterYears(this.age);
 //

}
}
