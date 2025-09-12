    
    /*let elem1 = document.getElementByID("myId");
    document.getElementsByClassName("myClass");
    document.getElementsByTagName("p");
    document.querySelector("#myId");
    document.querySelectorAll(".myClass"); 

    console.log(document.getElementByID("myId"))*/
    let element = document.getElementById("myId");
    element.innerText +="Hello!";
    element.style.color="blue";
    element.style.backgroundColor="red";

    let element2 = document.getElementsByClassName("myClass");
    
    element2[0].style.color="blue";
    element2[1].style.color="blue";
    element2[2].style.color="blue";
    element2[0].style.backgroundColor="aqua";
    element2[1].style.backgroundColor="aqua";
    element2[2].style.backgroundColor="aqua";

    let btn =document.getElementById("myBtn");
    btn.addEventListener("click" , function(){
    alert("Button clicked!");
    })

const numbers =[1,2,3];
let a =numbers[0]
let b= numbers[1]
let c= numbers[2]

console [a,b,c] = numbers
console.log(a +" " + b + " "+ c)

const user ={
    name:"Alice",
    age:25,
};
const{name, age} = user;
console.log(user,age)
console.log(name)
console.log(age)

const arr1 =[1,2];
const arr2 =[...arr1,3,4];
console.log(arr2);//[1,2,3,4]

const obj1 ={a: 1,b: 2};
const obj2 = {...obj1, c:3};
console.log(obj2);//{a:1 ,b:2, c:3}

function sum(...nums){
    return nums.reduce((total,num) => total +num,0);
} console.log(sum(1,2,3));//6

const[first, ...rest] =[10,20,30];
console.log(rest);//[20, 30]

console.log("before settimeout")
setTimeout(() =>{
    console.log("Data loaded");
    },3000);
console.log("before settimeout")