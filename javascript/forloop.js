
// //even number
// for(let i=2;i<11;i+=2){

//         console.log(i);
//     }

//     //odd number
// for(let i=1;i<11;i+=2){

//     console.log(i)
// }

// //reverse number

// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){

//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

// for(let i=1;i<=10;i++){

//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// let sum=0;


//sum of first 10 numbers
// for(let i=1;i<=10;i++){

//     sum+=i
// }
// console.log(sum);

// let fact=1;
// for(let i=1;i<=5;i++){

//     fact=fact*i;
// }
// console.log(fact);


// let n=1234;
// let rev=0;

// for(let i=n;i>0;i=Math.floor(i/10))
// {

//     let digit=i%10;
//     rev=rev*10+digit;
// }
// console.log(rev);


let x=6;
let count=0;

for(let i=1;i<=x;i++){

    if(x%i==0){
        count++;
    }
}
if(count==2){

    console.log("it is a prime");
}
else{
    console.log("it is not a prime");
}