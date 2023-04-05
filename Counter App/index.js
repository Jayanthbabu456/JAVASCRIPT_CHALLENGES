const number = document.getElementById("num");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
let count = 0;
button1.addEventListener("click", () => {
  count -= 1;
  number.innerHTML = count;
  if (number.innerHTML < 0) {
    number.style.color = "red";
  }
});
button2.addEventListener("click", () => {
  count = 0;
  number.innerHTML = count;
  if (number.innerHTML == 0) {
    number.style.color = "black";
  }
});
button3.addEventListener("click", () => {
  count += 1;
  number.innerHTML = count;
  if (number.innerHTML > 0) {
    number.style.color = "green";
  }
});
