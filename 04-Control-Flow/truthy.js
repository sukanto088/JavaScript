// const userEmail =[]

// if(userEmail)
// {
//     console.log("Got User Email");
// }
// else
// {
//     console.log("Dont have user email");
// }
// falsy values

// false ,0 , -0 ,BigInt 0n, " ",null , undefinedd ,NaN 

//truthy  values

 //'0', 'false' , " " ,[ ], {}, function(){}

//  if(userEmail.length===0)
//  {
//     console.log("Array is empty");
//  }
//  const emptobj ={}
//  if(object.keys(emptobj).length===0)
//  {
//     console.log("obejct is empty");
//  }

//  Nullish Coalesing Operator (???) :null undefined

let val1;
// val1 =5??10
// val1=null??10
// val1 =undefined??15
val1 =null??10??20
console.log(val1);

//Terniary OPerator

// condition ? true :false

const iceTeaPrice =100
iceTeaPrice>80 ? console.log("less then 80 "): console.log("more than 80 ")