/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((res, rej) =>
    setTimeout(() => res('resolved after 1 second'), 1000)
  );
}

function waitTwoSecond() {
  return new Promise((res, rej) =>
    setTimeout(() => res('resolved after 2 second'), 2000)
  );
}

function waitThreeSecond() {
  return new Promise((res, rej) =>
    setTimeout(() => res('resolved after 3 second'), 3000)
  );
}

function calculateTime() {
  let arrOfPromises = [];
  arrOfPromises.push(waitOneSecond());
  arrOfPromises.push(waitTwoSecond());
  arrOfPromises.push(waitThreeSecond());
  console.time('Promise Time');
  Promise.all(arrOfPromises).then((value) => {
    console.timeEnd('Promise Time');
    console.log(value);
  });
}
calculateTime();
