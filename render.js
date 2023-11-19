export let answerArray = [];
let shuffler = [];
export function render(data) {
  let html = data
    .map((el, index) => {
      let { question, correct_answer, incorrect_answers } = el;
      answerArray.push(correct_answer);
      shuffler = [correct_answer, ...incorrect_answers].sort(
        (a, b) => 0.5 - Math.random()
      );
      return `
    <div class="holder">
    <div class="num">Question no ${index + 1}</div>
    <div class="question">${question}</div>
    <ul class="flex">
      <li class="input-holder">
        <input type="radio" name=${index} id="a-${index}" value="${
        shuffler[0]
      }" />
        <label for="a-${index}">${shuffler[0]}</label>
      </li>
      <li class="input-holder">
        <input type="radio" name=${index} id="b-${index}" value="${
        shuffler[1]
      }" />
        <label for="b-${index}">${shuffler[1]}</label>
      </li>
      <li class="input-holder">
        <input type="radio" name=${index} id="c-${index}" value="${
        shuffler[2]
      }" />
        <label for="c-${index}">${shuffler[2]}</label>
      </li>
      <li class="input-holder">
        <input type="radio" name=${index} id="d-${index}" value="${
        shuffler[3]
      }" />
        <label for="d-${index}">${shuffler[3]}</label>
      </li>
    </ul>
  </div>`;
    })
    .join(" ");

  // console.log(answerArray);
  return html + `<div class="holder"><button class="btn">click to check</button></div>`;
}
