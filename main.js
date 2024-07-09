document.querySelector(".cont").addEventListener("click", function () {
  this.classList.toggle("animate");
});
let flag = false;
document.getElementById("butt").onclick = function () {
  if (!flag) {
    document.body.classList.add("body2");
    document.querySelector(".container").classList.add("container2");
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((element) => {
      element.classList.add("btn2");
    });
    let bolds = document.querySelectorAll(".mode b");
    bolds.forEach((e) => {
      e.classList.add("bold");
    });
  }
  if (flag) {
    document.body.classList.remove("body2");
    document.querySelector(".container").classList.remove("container2");
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((element) => {
      element.classList.remove("btn2");
    });
    let bolds = document.querySelectorAll(".mode b");
    bolds.forEach((e) => {
      e.classList.remove("bold");
    });
  }
  flag = !flag;
};

let screen = document.getElementById("screen");
let btns = document.querySelectorAll(".btns");
btns.forEach((ele) => {
  ele.addEventListener("click", function () {
    let btntext = ele.textContent;
    if (btntext === "×") btntext = "*";

    if (btntext === "÷") btntext = "/";
    if (btntext === "Sin" || btntext === "Cos" || btntext === "Tan")
      btntext += "(";

    screen.value += btntext;
  });
});
function solve() {
  screen.value = eval(screen.value);
}
function sin() {
  let result = screen.value;
  screen.value = Math.sin(screen.value * (Math.PI / 180));
}
function cos() {
  let result = screen.value;
  screen.value = Math.cos(screen.value * (Math.PI / 180));
}
function tan() {
  let result = screen.value;
  screen.value = Math.tan(screen.value * (Math.PI / 180));
}

function pow() {
  let result = screen.value;
  screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  let result = screen.value;
  screen.value = Math.sqrt(screen.value, 2);
}
function log() {
  let result = screen.value;
  screen.value = Math.log(screen.value);
}
function pi() {
  let result = screen.value;
  screen.value = Math.PI;
}
function e() {
  let result = screen.value;
  screen.value = 2.71828182846;
}
function fact(num) {
  if (num == 0 || num == 1) return 1;
  else return num * fact(num - 1);
}
function factorial() {
  let result = screen.value;
  screen.value = fact(screen.value);
}
function Delete() {
  let result = screen.value;
  screen.value = result.substr(0, result.length - 1);
}
function remove() {
  screen.value = "";
}

