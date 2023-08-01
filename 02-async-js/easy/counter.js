function counter() {
  let count = 0;
  const timer = setInterval(() => {
    console.log(count++);
    if (count === 10) clearInterval(timer);
  }, 1000);
}

// counter();

// without setInterval
function countFromOneToTen(currentCount) {
  if (currentCount > 10) {
    return;
  }

  console.log(currentCount);

  // Schedule the next execution after a delay of 1000 milliseconds (1 second)
  setTimeout(function () {
    countFromOneToTen(currentCount + 1);
  }, 1000);
}

// Start the counter from 1
countFromOneToTen(1);
