const myNumbs =[1,2,3]

// const myTotal = myNumbs.reduce(function(acc,curval){
//     console.log(`acc : ${acc} and currval :${curval}`);
//     return acc+curval
// }, 0)

const myTotal =myNumbs.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);