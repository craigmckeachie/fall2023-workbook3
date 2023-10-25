"use strict";
//global
let count = 0;

function increment() {
  count = count + 1;
}

function decrement() {
  count = count - 1;
}

increment(); //1
increment(); //2
increment(); //3
increment(); //4
decrement(); //3

console.log(count);
