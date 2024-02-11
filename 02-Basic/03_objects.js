//singleton

//object literals

const sym = Symbol("key1")
const jsuser={
    name:'sukanto',
    "fullname":"sukantomahato",
    [sym]:"mykey1",
    age:21,
    location:"gunupur",
    email:"sukantomahato36@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser[sym]);
jsuser.email="beingsuku182gmail.com"
// Object.freeze(jsuser)
jsuser.email="isthatme182gmail.com"
console.log(jsuser)

jsuser.greeting=function(){
    console.log(`hello js user1,${this.name}`);
}
console.log(jsuser.greeting());