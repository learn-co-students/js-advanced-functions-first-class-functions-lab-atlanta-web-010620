function returnFirstTwoDrivers(drivers){
    const array = []; 
    array.push(drivers[0]); 
    array.push(drivers[1]); 
    return array; 
}

function returnLastTwoDrivers(drivers){
    const array = []; 
    array.push(drivers[drivers.length-2]); 
    array.push(drivers[drivers.length-1]); 
    return array; 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(multiplier){
    return function fair(num){
        return num*multiplier; 
    }
}
function fareDoubler(newFare){
    const fare = createFareMultiplier(newFare);
    return fare(2); 
}

function fareTripler(newFare){
    const fare = createFareMultiplier(newFare); 
    return fare(3); 
}

function selectDifferentDrivers(arrayOfDrivers, fun){
    return fun(arrayOfDrivers);
}