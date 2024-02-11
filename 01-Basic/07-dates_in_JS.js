 let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString()); //2/11/2024, 7:16:10 AM

 let mycreateDate = new Date (2024, 1, 11)
 console.log(mycreateDate.toDateString());  //Sun Feb 11 2024
 console.log(mycreateDate.toLocaleDateString()); //2/11/2024 
 console.log(mycreateDate.toLocaleString());


 let myTimeStap = Date.now()
 console.log(myTimeStap);
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday:"long"
    
})