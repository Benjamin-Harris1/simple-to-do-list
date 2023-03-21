"use strict";

window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

// Udkommenteret fordi vi laver det samme på en anden måde nedenunder
/* function addToDo() {
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listText.textContent = newToDo.value;
  listBtn.textContent = "Delete";

  list.appendChild(listItem);

  listItem.appendChild(listText);
  listItem.appendChild(listBtn);

  console.log(listItem);
  console.log(listText);
  console.log(listBtn);

  newToDo.value = "";

  listBtn.addEventListener("click", removeToDo);
}

function removeToDo() {
  this.parentNode.remove();
} */

function addToDo() {
  const myHTML = /*html*/ `
  <li>
    <span>${newToDo.value}</span>
    <button>Delete</button>
  </li>
  `;
  list.insertAdjacentHTML("beforeend", myHTML);

  newToDo.value = "";
  newToDo.focus();

  list.querySelector("li:last-child button").addEventListener("click", removeToDo);
}

function removeToDo() {
  this.parentNode.remove();
}
