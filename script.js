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



const prices = [10.99, 5.49, 12.99, 8.75, 15.20];

// Your higher-order function here
const calculateDiscountedTotal = prices => prices.reduce((total, price) => {
// Use reduce

let discountedPrice = price * 0.8;
  // console.log(discountedPrice);

  return total + discountedPrice;
}, 0).toFixed(2);

console.log(calculateDiscountedTotal(prices));



const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Your higher-order function here
const findWordWithA = words => {
// Use find
};

console.log(findWordWithA(words));



const sumOfArray = (arrayOfNumbers) => {
    //Your code here
 }
 
 // Input: [1, 2, 3, 4, 5, 6]
 // Output: 21
 

 
 