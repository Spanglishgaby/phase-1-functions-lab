
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42){
        
    return someValue - 42;
  }else 
{
    return 42 - someValue;
}}
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    if (someValue >= 42){
        
        return (someValue - 42) * 264;
      } else if(someValue < 42){
    
        return (42 - someValue) * 264;
    }}
    

  function distanceTravelledInFeet(start, destination) {
    if (destination > start){
        return (destination - start) * 264;
      }else if(destination < start){
    
        return (start - destination) * 264;
    }
  }
  function calculatesFarePrice(start, destination) {
    let distanceinfeet = distanceTravelledInFeet(start, destination);
    let result;
    if (distanceinfeet < 400){
        result = 0;
    } else if(distanceinfeet >=400 && distanceinfeet<=2000){
       result = (distanceinfeet - 400 ) * 0.02;
    } else if(distanceinfeet > 2000 && distanceinfeet <2500){
        result = 25 ;
    } else if( distanceinfeet =2500) {
      result = 'cannot travel that far' ;
    }
    return result;
}