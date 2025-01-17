// Microtasks are small tasks scheduled to run immediately after the currently executing script finishes but before rendering and processing other events in the task queue.

// Promise
console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask 1");
});

console.log("End");

// Output:
// Start
// End
// Microtask 1

// queueMicrotask
// The queueMicrotask API explicitly schedules a microtask.

console.log("Start");

queueMicrotask(() => {
  console.log("Microtask 2");
});

console.log("End");

// Output:
// Start
// End
// Microtask 2


// Microtasks	                            Macrotasks
// Higher priority in the event loop.	Lower priority compared to microtasks.
// Examples: Promises, queueMicrotask.	Examples: setTimeout, setInterval.

console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");

// Output:
// Start
// End
// Microtask
// Macrotask
