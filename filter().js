const arr = [2,3,4,5];

function isOdd(x){
    return x%2 != 0;
}

const ans = arr.filter((x) => x>2);

// const ans = arr.filter(isOdd);
console.log(ans);