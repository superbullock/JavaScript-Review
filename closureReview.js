var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here
var calling = callFriend();
calling('435-215-9248');


/*

Write a function that accepts a function as it's only argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

var mainFn = function (callback, n) {
    var count = n || 1;
    return function () {
        if (count > 0) {
            count--;
            return callback();
        } else {
            console.log('STAHHHHP!');
        }
    }
}

var testFn = function () {
    console.log('yeah');
}

var newFn = mainFn(testFn, 5);
newFn();
newFn();
newFn();
newFn();
newFn();
newFn();