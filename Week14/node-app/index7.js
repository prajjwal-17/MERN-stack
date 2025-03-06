"use strict";
console.log("Hey there");
function del2(fn) {
    setTimeout(fn, 5000);
}
del2(() => {
    console.log("5 seconds have passed");
});
//better way
