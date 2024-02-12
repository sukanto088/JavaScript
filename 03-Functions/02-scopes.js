let a =100
if(true){
    let a =10
    let b=20
//     console.log("inner",a);
}





// console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username="sukanto"
    function two()
    {
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true)
{
    const username="sukanto"
    if(username==="sukanto")
    {
        const website ="youtube"
        // console.log(username+website);
    }
    // console.log(website);//error
}
// console.log(username);//error

//**************************************************** */
// addone(5) //no error
function addone(num)
{
    return num+1
}
console.log(addone(5));
// addTwo(6)//error if it is intailaized before
const addTwo=function(num)
{
    return num+2
}
// addTwo(6)
console.log(addTwo(6));