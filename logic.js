import { answerArray } from "./render.js";

let answerCheckingArray = [];
let checkedRadioButtons;
let checkedValues;
export let scoreEl = document.querySelector(".score");
let score = 0;

export function logicChecker() {
  let btnEl = document.querySelector(".btn");
  console.log("logic checking");
  btnEl.addEventListener("click", eventing);
}

function eventing(e) {
  e.preventDefault();
  checkedRadioButtons = [...document.querySelectorAll(`input:checked`)];
  //!getting values from checked radio buttons
  if (checkedRadioButtons.length) {
    checkedValues = checkedRadioButtons.map((a) => {
      return a.value;
    });
    // console.log(checkedValues);
    //! selecting the related answers from whole answer array for comparing to check the answer
    checkedRadioButtons.forEach((c) => {
      answerCheckingArray.push(answerArray[c.name]);
    });
    //!logic for checking if the answers are true or false
    for (let i = 0; i < checkedValues.length; i++) {
      if (checkedValues[i] === answerCheckingArray[i]) {
        score++;
        console.log("right");
        console.log(checkedRadioButtons[i]);
        checkedRadioButtons[i].closest(".input-holder").style.background =
          "#62c370";
      } else {
        checkedRadioButtons[i].closest(".input-holder").style.background =
          "#cc3363";
        console.log("wrong");
      }
    }
  } else {
    console.log("check the answer");
    return;
  }
  // scoreEl.textContent = score || 0;
  // console.log(score);
  console.log(answerArray);
  // console.log(answerCheckingArray);
}
//

//   console.log(checkedValues);
// for (let i = 0; i < 50; i++) {
//   if (checkedValues[i] == answerArray[i]) {
//     let final = document.querySelector(`input[name="${i}"`);
//     final.closest(".input-holder").style.background = "green";
//     console.log("right");
//   } else {
//     console.log("wrong");
//     let final = document.querySelector(`input[name="${i}"`);
//     final.closest(".input-holder").style.background = "red";
//   }
// }
