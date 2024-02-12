
(function chai()
{
    //named IIFE
    console.log(`DB Connected`);
})();  //add ; to end it is must to add

//Unnamed IIFE
(  (name)=>{
    console.log(`Db Connected two ${name} `);
})('sukanto');