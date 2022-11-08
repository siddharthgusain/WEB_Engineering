// debouncing is done to get better performance in frontend , to reduce number of times a function is called
// Debounce is a higher order function

const inputObject = document.getElementById("searchBar");

const getData = () => {
    console.log("SEARCHING.......")
}

const delayedFunction = function (fun, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(this, args);
        }, delay);
    }
}

/*
 The returned timeoutID is a positive integer value which identifies 
the timer created by the call to setTimeout(). This value can be passed 
to clearTimeout() to cancel the timeout.
*/

const debounce = delayedFunction(getData, 300);

inputObject.addEventListener("input", debounce);

/* 
getData is not called on every keystroke , it is only called if the delay with 
two keystrokes is more than 300ms
*/