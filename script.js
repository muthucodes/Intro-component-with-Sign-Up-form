"use strict";

// Function to select elements
const selectElement = function (elementIdentifier) {
  // console.log(elementIdentifier);

  return document.querySelector(elementIdentifier);
};

// Function to select inputted values
const obtainValue = function (element) {
  // console.log(element.value.trim());
  return element.value.trim();
};

const firstName = selectElement("#first-name");
const lastName = selectElement("#last-name");
const email = selectElement("#email");
const password = selectElement("#password");
const btn = selectElement(".btn");

const iconHTML = `<i class="fa-solid fa-circle-exclamation error-icon"></i>`;

const validateInputs = function (element) {
  if (obtainValue(element) === "") {
    let div = document.createElement("div");
    div.className = "error";
    div.innerText = `${element.getAttribute("placeholder")} cannot be empty`;

    element.style.border = "1px solid red";
    element.parentElement.after(div);
    element.insertAdjacentHTML("afterend", iconHTML);
  }
};

const validateEmail = function (element) {
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (obtainValue(element) !== "" && !obtainValue(element).match(emailRegex)) {
    let div = document.createElement("div");
    div.className = "error";

    div.innerText = "Looks like this is not an email";

    element.style.border = "1px solid red";
    element.style.color = "red";

    element.parentElement.after(div);
    element.insertAdjacentHTML("afterend", iconHTML);
  }
};

const resetErrors = function () {
  document.querySelectorAll(".error").forEach((e) => (e.innerText = ""));
  document.querySelectorAll("input").forEach((e) => {
    e.style.border = "1px solid hsl(246, 25%, 77%)";
    e.style.color = "black";
  });
  document.querySelectorAll(".error-icon").forEach((e) => e.remove());
};

const init = function () {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
};

window.onload = function () {
  // console.log("page loaded");
  init();
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("submit button clicked");
  resetErrors();
  validateInputs(firstName);
  validateInputs(lastName);
  validateInputs(password);
  validateInputs(email);
  validateEmail(email);
});
