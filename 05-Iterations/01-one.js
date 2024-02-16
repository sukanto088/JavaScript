//for loop
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element ==5)
//     {
//         console.log("5 is the best number");
//     }
//     console.log(element)  
// }
// for (let i=1;i<=10;i++)
// {
//     // console.log(`outer loop value :${i}`);
//     for(let j= 1;j<=10;j++)
//     {
//         // console.log(`Inner loop value ${j} and inner loop value is ${i}`);
//         console.log(i+ '*' + j +'='+ i*j)
//     }
// }

// let myarray =['flash','batman','superman']
// for(let i =0;i<myarray.length;i++)
// {
//     // const element = myarray[i]
//     console.log(myarray[i]);
// }

//break and continue 

// for(let  i=1;i<=20;i++)
// {
//     if(i==5)
//     {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }


for(let  i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`)
}