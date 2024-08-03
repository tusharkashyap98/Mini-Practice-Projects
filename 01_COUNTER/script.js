const count = document.querySelector(".count");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const changeBy = document.querySelector(".changeBy")
const resetBtn = document.querySelector(".resetBtn");



// plusBtn.addEventListener("click",()=>{
//     // console.log(" plus button was clicked");
//     countValue = parseInt(count.innerText);
//      console.log(countValue);
//     count.innerText = countValue + 1
// })


plusBtn.addEventListener("click",()=>{
    // console.log(" plus button was clicked");
         const countValue = parseInt(count.innerText);
      const changeByValue = parseInt(changeBy.value);
          count.innerText = countValue + changeByValue
})


minusBtn.addEventListener("click",()=>{
    // console.log(" plus button was clicked");
         const countValue = parseInt(count.innerText);
        const changeByValue = parseInt(changeBy.value);
          count.innerText = countValue - changeByValue
})




resetBtn.addEventListener("click",()=>{
   count.innerText = 0
})

