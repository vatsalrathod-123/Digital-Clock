function updateClock() {
  const now = new Date();

  //? Extract Time
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  //? Extract Date
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  //? Update the time and date in the DOM
  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById(
    "date"
  ).textContent = `${dayName}, ${monthName} ${day},${year}`;
}

//? Update the clock every second
setInterval(updateClock, 1000);

//? Call updateClock once to show the time immediately on load
updateClock();
