//map() or map function  basically used for transforming array

const arr = [2,3,4,5]


// function triple(x){
//     return x*3;
// }
// function double(x){
//     return x*2;
// }
function binary(x){
    return x.toString(2);// Code to convert decimal to binary no.
}
const ans = arr.map((x) => x.toString(2));
// const ans = arr.map(binary);
console.log(ans);