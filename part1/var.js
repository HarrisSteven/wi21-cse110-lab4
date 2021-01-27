function discountPrices(prices, discount) {
  //var discounted = [];
  //var finalPrice = 0;
  // let discounted = [];
  // let finalPrice = 0;
  const discounted = [];
  const finalPrice = 0;

  //for(var i = 0; i < prices.length; i++) {
  // for(let i = 0; i < prices.length; i++) {
  for(var i = 0; i < prices.length; i++) {
    //var discountedPrice = prices[i] * (1 - discount);
    // let discountedPrice = prices[i] * (1 - discount);
    var discountedPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i);
  console.log(discountedPrice);
  console.log(finalPrice);

  return discounted;
}

let student = {
  name: 'Sarah',
  major: 'Computer Science',
  'Grad Year': '2022',
  greeting: function() { console.log('Hello!'); },
  'Favorite Teacher': {
    name: 'Thomas Powell',
    course: 'CS 110'
  },
  courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
}

// console.log(student.courseLoad[0]);
// console.log(student.major);
// console.log(student['Favorite Teacher']);
// student.greeting();
// console.log(student['Favorite Teacher'].name);

// if(2 == true) {
//   console.log('Hello!');
// }
// else if(2) {
//   console.log('How are you?');
// }
// else {
//   console.log('Goodbye');
// }

// function modifyArray(array, callback) {
//   const newArr = [];
//   for(let i = 0; i < array.length; i++) {
//     newArr.push(callback(array[i], function(x) {
//       return x * 2;
//     }));
//   }
//   return newArr;
// }

// function doSomething(num, callback) {
//   return callback(num + 2);
// }

// console.log(modifyArray([1, 2, 3], doSomething));

function printNums() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printNums();