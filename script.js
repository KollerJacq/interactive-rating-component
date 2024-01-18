const buttons = document.querySelectorAll(".circle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

function changeSubmit() {
  const submit = document.querySelector(".submit");
  submit.style.backgroundColor = "#fff";
  submit.style.color = "hsl(25, 97%, 53%)";
}
