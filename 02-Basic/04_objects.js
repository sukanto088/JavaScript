const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sukanto"
tinderuser.isloggedIn = false
// console.log(tinderuser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sukanto",
            lastname:"mahato"
        }
    }
}
console.log(regularUser);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}

// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"sukantomahto@gmail.com"
    }
]
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser));
