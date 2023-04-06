let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let dot = document.querySelector(".dot");
let imageindex = 1;
let img = document.querySelector(".img");

prev.onclick = () => {
  imageindex -= 1;
  if (imageindex == 0) {
    console.log(imageindex);
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }
  img.setAttribute("src", "assets/" + images[imageindex]);
  if (imageindex < images.length - 1) {
    next.style.display = "block";
  }
};
next.onclick = () => {
  imageindex += 1;
  if (imageindex == images.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
  img.setAttribute("src", "assets/" + images[imageindex]);
  if (imageindex >= 1) {
    prev.style.display = "block";
  }
};
