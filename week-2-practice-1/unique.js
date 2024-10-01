var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// var uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);
var uniqueNumbers=numbers.filter((num,index,self)=>self.indexOf(num)==index);
console.log(uniqueNumbers);
