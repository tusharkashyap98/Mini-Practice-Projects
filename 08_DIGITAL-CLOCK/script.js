// function updateClock() {
//   const now = new Date();

//   const hours = now.getHours().toString().padStart(2, "0");

//   const minutes = now.getMinutes().toString().padStart(2, "o");

//   const seconds = now.getSeconds().toString().padStart(2, "o");

//   const timeString = `${hours}: ${minutes}: ${seconds}`;

//   document.getElementById("clock").textContent = timeString;
// }

// setInterval(updateClock, 1000);

// updateClock();


function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");

  const minutes = now.getMinutes().toString().padStart(2, "0");

  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}: ${minutes}: ${seconds}`;

//   document.getElementById("clock").textContent = timeString;

document.querySelector(".para").innerText = timeString;

}

setInterval(updateClock, 1000);

updateClock();
