var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let num=0;

for (const number of numbers) {

    num=Math.max(num,number);
    
}
console.log(num);