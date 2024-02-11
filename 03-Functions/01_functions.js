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
console.log(loginUserMessage());//undefined
