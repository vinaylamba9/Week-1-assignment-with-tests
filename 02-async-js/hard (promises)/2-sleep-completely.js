/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function wait(seconds) {
  return new Promise((res, rej) => setTimeout(() => res(1), seconds * 1000));
}

async function sleep(seconds) {
  console.log('Start');
  try {
    await wait(seconds);
    console.log('Just finished');
  } catch (err) {
    console.log(err);
  }
  console.log('End');
}

sleep(4);
