// NUMBER 1
const funBus = document.querySelector(".logo-heading");

funBus.addEventListener(
  "mouseenter",
  function (event) {
    // debugger;
    event.target.style.color = "green";
    event.target.style.fontSize = "200px";
    setTimeout(function () {
      event.target.style.color = "";
      event.target.style.fontSize = "";
    }, 800);
  },
  false
);

//NUMBER
// const navColor = document.querySelector(".main-navigation");

// navColor.addEventListener("mouseover", function (event) {
//   event.target.style.color = "teal";
//   event.target.style.fontSize = "50px";
//   setTimeout(function () {
//     event.target.style.fontSize = "";
//   }, 800);
// });

//NUMBER 2
const paragraphText = document.querySelector("body p");

paragraphText.addEventListener("dblclick", function (event) {
  //   debugger;
  event.target.style.color = "blue";
});

//Numer 3
const headerImg = document.querySelector(".intro img");
// console.log(imageEnlarge)
let scale = 1;

headerImg.addEventListener("wheel", function (event) {
  scale += event.deltaY * -0.2;
  scale = Math.min(Math.max(0.2, scale), 2);
  headerImg.style.transform = `scale(${scale})`;
});

//Number 4
const h2Color = document.querySelector("body");
h2Color.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    // debugger;
    h2Color.style.color = "red";
  } else {
    event.key === "F";
    h2Color.style.color = "";
  }
});

//Number 5
window.addEventListener("load", function (event) {
  console.log("LOL THIS WAS FREE");
});

//Number 6,7,8,9
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((el) => {
  el.addEventListener("pointerover", function (event) {
    el.style.color = "green";
  });
  el.addEventListener("pointerout", function (event) {
    el.style.removeProperty("color");
  });
  el.addEventListener("focus", function (event) {
    el.style.width = "10%";
    el.style.color = "purple";
  });
  el.addEventListener("focusout", function (event) {
    el.style.color = "skyblue";
  });
});

//Number 10
const button = document.querySelectorAll(".btn");
button.innerHTML = "Hell yeah get ready to hop on the Bus";
button.forEach(function (signup) {
  signup.addEventListener("onclick", function (event) {
    alert(`${event.target.innerHTML}`);
  });
});

//Number 11
const image4 = document.querySelector(".content-destination img");

image4.addEventListener("click", function (event) {
  event.target.style.boxShadow = "50px 50px green";
});
