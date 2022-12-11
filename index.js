

  function sayHello() {
    console.log('Hello!');
  }
  
  receivesAFunction(sayHello); 

  function returnsANamedFunction() {
    
    return function sayHello() {
      console.log('Hello!');
    }
  }

let sayHello = returnsANamedFunction();


sayHello(); 

function returnsAnAnonymousFunction() {
  
  return function() {
    console.log('Hello!');
  }
}

let sayHello = returnsAnAnonymousFunction();


sayHello(); 

  
 