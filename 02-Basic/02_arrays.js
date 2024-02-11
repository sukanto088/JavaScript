const heros=["thod","ironman","spiderman"]
const dc= ["superman","flash","batman"]

// heros.push(dc)
// console.log(heros[3][1]);

// let all= heros.concat(dc)
// console.log(all);
// const allnew=[...heros,...dc]
// console.log(allnew);
const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sukanto"))
console.log(Array.from("sukanto"));

let score1=100;
let score2=200;
let score3=300;
console.log((Array.of(score1,score2,score3)));