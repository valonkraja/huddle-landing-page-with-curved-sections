// const email = document.querySelector(".email");
// const submit = document.querySelector(".submit");
const emailForm = document.querySelector(".email-form");
const emailError = document.querySelector(".email-error");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let email = e.target[0].value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailError.classList.remove("active");
  } else {
    emailError.classList.add("active");
  }
});
