const leap_year=(num)=>{
    if (num%4==0)
        return "Leap year"
    else 
    return "Not Leap year"
}

const leap=leap_year(99);
console.log(leap);