function faisalAsyncFunction(){
    let p = new promise(function(resolve){
        resolve("hi there")
    });
    return p;
}

async function main(){
    const value = await faisalAsyncFunction();
    console.log(value);
}
main();