const coding =['js','rb','py','java','cpp']

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// })
// function printme(item)
// {
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index ,arr);
// })

const mycoding =[
    {
        languagename:"javscript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
})