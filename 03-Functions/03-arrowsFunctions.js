const user ={
    username:"hitesh",
    price:999,
    welcomemessage :function(){
        console.log(`${this.username} , welcome to my website` );
        // console.log(this);
    }

}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this);

//  function chai()
//  {
//     let user="hitesh"
//     console.log(this.user);
//  }
//  chai()
// const chai =function(){
//     let user="hitesh"
//     console.log(this.user);
// }
// chai()


//*******************************************Arrow Functions******************************** */


const chai =()=>{
    let user="hitesh"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,4));


//implicit return
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"sukanto"})
console.log(addTwo(2,5));


    
