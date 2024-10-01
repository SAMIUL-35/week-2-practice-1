const divide_three=[];
const divide_five=[];


for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
        divide_three.push(i);
    } else if (i % 5 === 0) {
        divide_five.push(i);
    }
    
}

console.log(divide_three);
console.log(divide_five);