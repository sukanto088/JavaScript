//arrays

const myarr =[0,1,2,3,4,5] //index start with 0
console.log(myarr[1]);
const heros =['ben10','shaktiman','bhemm']
const myarr2= new Array(1,2,3,4,5)

//**************************************Methods*********************************** */

myarr.push(6) //add element at last 
console.log(myarr);
myarr.pop()//remove element from last 
console.log(myarr);
myarr.unshift(9)//add elements at the first
console.log(myarr);
myarr.shift()
console.log(myarr);
console.log(myarr.includes(9)); //it checks the element is present in the array or not

console.log(myarr.indexOf(5));

//slice ,splice

console.log("A",myarr)
const myn1= myarr.slice(1,3)
console.log("B", myn1);

const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);