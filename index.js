
function callback() {}
function receivesAFunction(callback) {
      console.log("This is a callback")
     
      return callback()
}
console.log
receivesAFunction(receivesAFunction())

console.log(receivesAFunction(callback))

function returnsANamedFunction() {return (function functionToBeReturned(){return 5+5})}
console.log(returnsANamedFunction())
   
returnsANamedFunction()

function returnsAnAnonymousFunction(){

      return () => {}
  
 
}

console.log(returnsAnAnonymousFunction())
 


