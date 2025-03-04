"use strict";
console.log("Hey there");
function del(func) {
    setTimeout(func, 5000);
}
del(() => {
    console.log("5 seconds have passed");
});
