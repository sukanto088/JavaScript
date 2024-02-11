const name= "hitesh"
const repocount = 50
// console.log(name+repocount+"value")
console.log(`hello my name is ${name }and my repcount id ${repocount}`)

//another way to intialize string
//***********************String Methods**********************************************************
const gameName= new String('sukanto')
console.log(gameName[0]); //s
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt('3'))
console.log(gameName.indexOf('t'));
const name1 = "sukantomahato"
const newstring  = name1.substring(0,7);
console.log(newstring);
const anotherString = name1.slice(-8,9);
console.log(anotherString);
const newstringOne = "           sukanto      "
console.log(newstringOne);
console.log(newstringOne.trim());
const url = "https://sukantomahato%20.com"
console.log(url.replace('%20','-'));
console.log(url.includes('sukan')); ///true
const gameName1= 'suk-nto-mah-ato';
console.log(gameName1.split('-'));
