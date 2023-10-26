console.log("Zero");

setTimeout(() => console.log("One"), 0);

Promise.resolve().then(() => console.log("Two"));

console.log("Three");
