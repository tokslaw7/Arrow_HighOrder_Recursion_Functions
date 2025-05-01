const greet = (name) => {
    return "Hello, " + name + "!";
}
 

const square = (number) => {
    return number * number;
}

const isEven= (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your higher-order function
const evenNumbersSquared = numbers => {
// Use filter and/or map
const evenNumbers = numbers.filter((number) => {
    if(number % 2 === 0){
      return true;
    }
})

const squaredNumbers = evenNumbers.map((number) => {
    return number * number;
   })
  
   return squaredNumbers;
  };

console.log(evenNumbersSquared(numbers));



 
 