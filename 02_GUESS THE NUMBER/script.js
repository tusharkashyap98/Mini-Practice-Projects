(function () {
  const form = document.querySelector("form");
  const userInput = document.querySelector(".user-input");
  const results = document.querySelector(".results");
  const allGuesses = document.querySelector(".all-guesses");
  const submitBtn = document.querySelector(".sumbmit-btn");
  const startGameBtn = document.querySelector(".start-game-btn");

  let allGuessesArray = [];
  let randomNum = Math.floor(Math.random() * 100);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = parseInt(userInput.value);
    if (inputValue > randomNum) {
      results.innerText = "Too hight!";
    } else if (inputValue < randomNum) {
      results.innerText = "Too low!";
    } else {
      results.innerText = "You got it! Congrats";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    allGuessesArray.push(userInput.value);
    allGuesses.innerText = "your guesses:" + allGuessesArray.join(", ");
    form.reset();
    startGameBtn.addEventListener("click", () => {
      results.innerText = "";
      allGuesses.innerText = "";
      startGameBtn.disabled = true;
      submitBtn.disabled = false;
      allGuessesArray = [];
      randomNum = Math.floor(Math.random() * 100);
    });
  });
})();



// const maxAttempt = 3;
//       const attemptCount = 0;
//       function handglingSubmit(event){
//         attemptCount++;
//         if(attemptCount >= maxAttempt){
//           console.log("max attemp has been done")
//         }
//       }



// (function(){
//   const form = document.querySelector("form");
// const userInput = document.querySelector(".user-input");
// const results = document.querySelector(".results");
// const startGameBtn = document.querySelector(".start-game-btn");
// const submitBtn= document.querySelector(".sumbmit-btn");
// const allGuesses = document.querySelector(".all-guesses");

// let allGuessesArray = [];
// let randomNum = Math.floor(Math.random() * 100);

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//    const inputValue =  parseInt(userInput.value)
//   if(inputValue > randomNum){
//     console.log("too high");
//     results.innerText = "too high"
//   } else if (inputValue < randomNum){
//     console.log("too low");
//      results.innerText = "too low"
//   } else {
//     console.log("congratulation");
//      results.innerText = "congratulation"
//      startGameBtn.disabled = false;
//      submitBtn.disabled = true;
//   }
//    allGuessesArray.push(userInput.value);
//    allGuesses.innerText = `your all guesses : ${allGuessesArray.join(",")}`
  
//    form.reset();
//    startGameBtn.addEventListener("click", ()=>{
//     results.innerText = ""
//     startGameBtn.disabled = true;
//     submitBtn.disabled = false;
//     randomNum = Math.floor(Math.random() * 100);
//     allGuessesArray = [];
//     allGuesses.innerText = "";
//   })
// })


// })();