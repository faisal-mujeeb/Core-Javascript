//Eg of CallBack and Inversion of Control
const cart = [ "Books", "Shirt" , "Kurta"];

createOrder(cart, function(orderId){
    proceedtoPayment(orderId);
});

//Introducing promise
 const promise = createOrder(cart);
 
 promise.then(function(orderId){
    proceedtoPayment(orderId);
 });
