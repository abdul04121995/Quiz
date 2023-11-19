import { render } from "./render.js";
import { logicChecker, scoreEl } from "./logic.js";
import { observing } from "./intersection.js";

const containerEl = document.querySelector(".container");
const resetEl = document.querySelector(".reset");
const startEl = document.querySelector(".start");
const inputEl = document.querySelector("#questioning");
const popupEl = document.querySelector(".popup");
let triggered = false;
let noOfQuestion;
let dataContainer;

inputEl.addEventListener("change", function (e) {
  if (+e.target.value >= 1 && +e.target.value <= 50) {
    noOfQuestion = +e.target.value;

    e.target.value = "";
  } else {
    e.target.value = "";
    displayer();
  }
  console.log(noOfQuestion);
});
async function fetcher(a) {
  await fetch(
    `https://opentdb.com/api.php?amount=${a}&category=17&type=multiple`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("bbooom");
      }
    })
    .then((data) => {
      dataContainer = data.results;
      // console.log(dataContainer);
      containerEl.innerHTML = render(dataContainer);
      logicChecker();
      observing();
    });
}
// startEl.addEventListener("click", fetcher);
// startEl.addEventListener("click", function () {
//   fetcher();
// });
startEl.addEventListener("click", function () {
  if (noOfQuestion) {
    fetcher(noOfQuestion);
    triggered = true;
  } else {
    console.log("enter correct value");
  }
});
// fetcher();

resetEl.addEventListener("click", function () {
  if (triggered) {
    fetcher(noOfQuestion);
  }
  // scoreEl.textContent = "0";
});

function displayer() {
  popupEl.classList.add("show");
  setTimeout(() => {
    popupEl.classList.remove("show");
  }, 1500);
}
// window.addEventListener("load", function () {
//   console.log("this is great");
// });
