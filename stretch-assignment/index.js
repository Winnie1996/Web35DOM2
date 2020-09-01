const paragraphColor = document.querySelectorAll("body p");
// console.log(paragraphColor)

paragraphColor.forEach(function (paragraph) {
  paragraph.addEventListener("mouseenter", function (event) {
    event.target.style.color = "teal";
    //this.style.color also works'
    setTimeout(function () {
      event.target.style.color = "";
    }, 700);
  });
});
