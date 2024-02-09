// console.log(2>1)
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);


console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
// the reason is that an equality check == and comparison > <>==
// <=work differnetly.

// comparsion convert null to a number , treating it as 0 ,
//  thats why null>0 is trueand null>0 is false

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);


//=== strict check  not only checks the value it checks the datatype also

console.log("2"===2);