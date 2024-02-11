const score =100
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2));
const otherNumber =23.8966
console.log(otherNumber.toPrecision(3));

const hundereds = 100000
console.log(hundereds.toLocaleString('en-IN'));

//************************************Maths********************************* */
console.log(Math); //object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(3,5,7,8,9));//3
console.log(Math.max(6,7,8,10));//10
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max=20

console.log(Math.floor(Math.random() *(max-min+1))+min)
