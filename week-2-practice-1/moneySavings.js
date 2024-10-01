const moneySavings=(arr,cost)=>{
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }
   let totalIncome=0;
   let totalExpenditure=cost;
   let savings=0;

   for (const a of arr) {
    if(a<3000){
    totalIncome+=a;
   }
   else 
   {
let tax=(20*a)/100;
totalIncome+=a-tax;

   }
   }
   savings=totalIncome-totalExpenditure;
if(savings<0)
    return "Earn More";
else return savings;
}

const saving=moneySavings([1000,2000,3000],5400);
const saving1=moneySavings([1000,2000,2500],5000);
const saving2=moneySavings([900,2700,3400],10000);
const saving3=moneySavings(100,[1000,2000,3000]);

console.log(saving);
console.log(saving1);
console.log(saving2);
console.log(saving3);