function saymyname(){
    console.log("h");
    console.log("eh");
    console.log("3h");
    console.log("ed");
}
// saymyname()
// function addtwoNumbers(number1,number2)
// {
//     console.log(number1+number2);
// }


function addtwoNumbers(number1,number2)
{
    // let result =number1+number2
    // return result
    return number1+number2;
}
const result = addtwoNumbers(2,3)
// console.log("esults",result);


function loginUserMessage(username){
    if(username===undefined)
    {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("sukanto"));
// console.log(loginUserMessage());//undefined

function calculateCartPrice(...num1)
{
    return num1
}
// console.log(calculateCartPrice(200,300,400));

const user={
    username:"sukanto",
    price:199
}
function handelObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
// handelObject({
//     username:"sukanto",
//     price:200

// })

// const mynewArr=[200,300,400,100,600]
// function returnSecondValue(getArray)
// {
//     return getArray[1]
// }
// console.log(returnSecondValue(mynewArr));