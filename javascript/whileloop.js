
// let i=1;

// while(i<=10){

//     console.log(i);
//     i++;
// }

// do{

//     console.log(i);
//     i++;

// }while(i<=20);


// let i=2;

// while(i<=10){

//     console.log(i);
//     i+=2;
// }

// let sum=0;
// let i=1;

// while(i<=10){

//     sum+=i;
//     i++;
// }
// console.log(sum);


// let num=1234;
// let rev=0;

// while(num>0){

//     rev=rev*10+num%10;
//     num=Math.floor(num/10);
// }

// console.log("reverse no:",rev);

//user input

// const process =require("node:process")

// let name=process.argv[2];
// console.log("hello",name);


const prompt=require("prompt-sync")

// let name=prompt("enter your name:");
// console.log("hello",name);

// let n=prompt("enter a number:");
// n=parseInt(n);

// for(let i=1;i<=n;i++){

//     console.log(i);
// }

let a;
let b;
let c=prompt("enter an operator(+,-,*,/):");
a=prompt("enter a number:");
b=prompt("enter another number:");
a=parseInt(a);
b=parseInt(b);

switch(c){

    case "+":
        console.log("addition:",a+b);
        break;
    case "-":
        console.log("substraction",a-b);
        break;
     case "*":
        console.log("multiplication",a*b);
        break;
     case "/":
        console.log("division",a/b);
        break;
    
    
}