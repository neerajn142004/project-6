

console.log("hello js")

var a ;
//console.log(b)
let b=21;
const c=30;

let name ="ALICe";
let age =25;
let isStudent= true;
let car =null;
let address;
let  user ={name:"Alice"}


console.log(a + " " + b + " " +c)
console.log(b)
console.log(c)
console.log(name)
console.log(age)
console.log(isStudent)
console.log(car)
console.log(address)
console.log(user)

console.log("----------")
console.log("-----------")
console.log(2==2)
console.log("2"=="2")
console.log(2=="2") //value is same or not
console.log(2==="2") //check value and datatype is same or not
console.log("----")
//for loop:
for(var i=0; i<5; i++){
    console.log(i);
}

console.log("line 41");

console.log(i);// memory allocation will be erased
/*
//while loop:
let i =0;
while(i<5){
    console.log(i);
    i++;
}
console.log("line 49");
console.log(i);//
//do..whileLoop:
let j =0;
do{
console.log(j);
j++;
}while (j<5);

*/
let fruits =["apple","banana","mango"];
for(let fruit of fruits){
    console.log(fruit);
}

console.log("-----")
for(let i=0; i<fruits.length;i++)
{
    console.log(fruits[i])
}
let use ={ name: "Alice", age: 25};
for (let key in use){
    console.log(key + " : " +use[key]);
}

function greet(name)
 { let name2= "name2"
    return 'Hello, ${name} ,${name2}';
}
console.log(name2)
console.log(greet("adi"))
console.log(greet)
/*const greet = function(name){
    return 'Hello, ${name}';
    };
console.log(greet)
*/
//const greet =(name) =>'Hello, ${name}';
//parameter is a accepting the data
//arguments is a giving instructions

// let globalvar ="i'm global"
 //let localvar="i'm local"
// console.log(globalvar);
//console.log(localvar);
//}
// console.log(globalvar);
//console.log(localvar);

// move in move out function
function sum(...nums){
    return nums.reduce((total,num) => total +num,0);
} console.log(sum(1,2,3));//6

const[first, ...rest] =[10,20,30];
console.log(rest);//[20, 30]
// callback hell  function : one function passes function
// promises   pending state  resolved rejected  states
//let val = fetch("")
//.then(response=> response.json())
//.then(data =>{
//console.log(data)    
//})
//console.log(val)
