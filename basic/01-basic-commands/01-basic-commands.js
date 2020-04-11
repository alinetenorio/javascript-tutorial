
console.log(2);

var name = "Aline";
console.log(name);

name = 3;
console.log(name);

//array
var students = [1,2,3];
console.log(students);

//objeto
var student = {
    name: 'Aline',
    age: 23
};

console.log(student.name);

var x = 10, y= 5;
console.log(x,y);

var r = sum(1,2);
console.log(r);

function sum(n1, n2){
    var res = n1 + n2;
    console.log(res);
    return res;
}

if(1 == '1'){
    //retorna true
    //checa os valores, não o tipo
}
if(1 === '1'){
    //retorna false
    //checa valores E tipo
}

gender = 'M';
var male = gender === 'M'; // male = true

//setInterval(sum, 1000,4,8);

setTimeout(sum, 5000, 7,9);