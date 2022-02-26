"use strict";
const advice = document.querySelector(".advice");
const text = document.querySelector(".text");
const dice = document.querySelector(".dicyy");
async function Advice(r) {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${r}`);
    const users = await response.json();
    // console.log(users);
    if (!users.slip && users.message.type === "error")
      throw new Error(`${users.message.text}`);

    advice.innerHTML = `${users.slip.id}`;
    text.innerHTML = `"${users.slip.advice}"`;
  } catch (err) {
    text.innerHTML = `OOP's.Something went wrong(${err})`;
  }
}

let r = Math.trunc(Math.random() * 225);
Advice(r);
dice.addEventListener("click", function () {
  r = Math.trunc(Math.random() * 225);
  Advice(r);
});
