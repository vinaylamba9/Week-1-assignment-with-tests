/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

async function calculateTime() {
  // USING ASYNC/AWAIT

  //   try {
  //     console.time();
  //     const result1 = await waitOneSecond();
  //     const result2 = await waitTwoSecond();
  //     const result3 = await waitThreeSecond();
  //     console.timeEnd();
  //     console.log('Result 1:', result1);
  //     console.log('Result 2:', result2);
  //     console.log('Result 3:', result3);
  //   } catch (error) {
  //     console.error('Error occurred:', error);
  //   }

  // USING PROMISE CHAIN
  console.time();
  waitOneSecond()
    .then((value1) => {
      console.log(value1);
      return waitTwoSecond();
    })
    .then((value2) => {
      console.log(value2);
      return waitThreeSecond();
    })
    .then((value3) => {
      console.log(value3);
      console.timeEnd();
    });
}

calculateTime();
