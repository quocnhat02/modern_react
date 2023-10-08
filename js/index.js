const printDelay = (delay) => console.log('Delay: ' + delay);
const callback = (delay) => setTimeout(() => printDelay(delay), delay);
const executeCallback = (callback, delay) => callback(delay);

const DELAY = 3000;

executeCallback(callback, DELAY);
