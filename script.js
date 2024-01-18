const buttons = document.querySelectorAll(".circle");
const submit = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const container = document.querySelector(".container");
const thanksContainer = document.querySelector(".container-thanks");
const rate = document.querySelectorAll(".rate");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

submit.addEventListener("click", () => {
  container.classList.add("hidden");
  thanksContainer.classList.remove("hidden");
});

rate.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
