/*"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result


A Promise is a JavaScript object that links producing code and consuming code

*/


let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);


//==================
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromiseData = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromiseData.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);