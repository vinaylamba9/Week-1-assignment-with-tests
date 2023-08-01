/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Promise Resolved after n seconds');
    }, n * 1000);
  });
}

wait(3)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
