const num_to_grade=(num)=>{
    if(num>=90){
        return 'A';
    }else if(num>=80){
        return 'B';
    } else if(num>=70){
        return 'C';
    } else if(num>=60){
        return 'D';
    } else {
        return 'F';
    }
}

const grade=num_to_grade(80);
console.log(grade);