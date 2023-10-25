//global
let count = 0;


function increment() {
    count = count + 1;
}

function decrement() {
  count = count - 1;
}

increment();
increment();
increment();
increment();
decrement();


console.log(count);