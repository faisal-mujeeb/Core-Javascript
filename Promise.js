let promise  = new Promise(function (resolve,reject){
  const x = "abc";
  const y = "abc";
  if(x==y){
    resolve();
  } else{
    reject();
  }
});

promise.then(function(){
    console.log("success");
}).catch(function(){
    console.log("fail");
});

/*
JavaScript is Synchronous in nature which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing.
 But there are a lot of functionalities in our program that make our code Asynchronous and one of them is the Async/Await functionality.

Async/Await is the extension of promises that we get as support in the language.
/