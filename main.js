let user = document.querySelector(".user");
let teacher = document.querySelector(".teacher");
let field = document.querySelector(".field");
let passwordfield = document.querySelector(".passwordfield");
let totoalMargin = 40 + passwordfield.offsetHeight;
//   console.log(totoalMargin);
field.style.position = "absolute";
field.style.bottom = "44%";

user.addEventListener("click", () => {
  passwordfield.style.transition = "1s 0.5s";
  field.style.transition = "1s 0s";
  user.style.background = "#6000ea";
  user.style.color = "white";
  teacher.removeAttribute("style");
  field.style.opacity = "0";
  field.style.pointerEvents = "none";
  field.style.userSelect = "none";

  passwordfield.style.marginTop = "0px";
});
teacher.addEventListener("click", () => {
  // field.style.transitionDelay = "1s";
  passwordfield.style.transition = "1s 0s";
  teacher.style.background = "#6000ea";
  teacher.style.color = "white";
  user.removeAttribute("style");
  field.style.pointerEvents = "all";
  field.style.userSelect = "all";
  field.style.transition = "1s 0.5s";
  passwordfield.style.marginTop = totoalMargin + "px";
  field.style.opacity = "1";
});

user.click();
