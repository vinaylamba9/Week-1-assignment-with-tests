function updateClock() {
  const now = new Date();

  // Get the current time components
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format hours in 12-hour clock with AM/PM
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, display 12 in 12-hour clock

  // Pad single-digit minutes and seconds with leading zeros
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display the time in both formats
  const time24Hour = `${hours}:${minutes}:${seconds}`;
  const time12Hour = `${hours}:${minutes}:${seconds} ${ampm}`;

  console.log(time12Hour);
  //   console.log(time24Hour);
}

// Update the clock every second
setInterval(updateClock, 1000);
