"use strict";
const container = document.querySelectorAll(".form_control");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const userRegEx =
  /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Check length , Check valid mail
function checkValid(input, regEx) {
  const parent = input.parentElement;
  if (regEx.test(input.value)) {
    parent.classList.add("success");
  } else {
    parent.classList.add("error");
    parent.querySelector("small").innerText = `Invalid ${input.id}`;
  }
}

// Check between 2 passwords
function passwordCheck(input1, input2) {
  console.log(input1, input2);
  const parent1 = input1.parentElement;
  const parent2 = input2.parentElement;
  [parent1, parent2].forEach((int) => {
    int.classList.add(input1.value !== input2.value ? "error" : "success"),
      (int.querySelector("small").innerText = `Password do not match`);
  });
}
c;
// Add eventlistener ('Submit')
form.addEventListener("submit", function (e) {
  e.preventDefault();
  container.forEach((input) => input.classList.remove("error", "success"));
  checkValid(username, userRegEx);
  checkValid(email, emailRegEx);
  passwordCheck(password, password2);
});
