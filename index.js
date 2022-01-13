let imgs = document.querySelectorAll("img");
let pictures = document.querySelectorAll(".picture");
console.log(pictures)

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("mouseover", function() {
    this.lastElementChild.style.transform = "translateX(0%)";
    this.lastElementChild.style.opacity = 1;
    this.lastElementChild.style.transition = "all 4s"
    // this.lastElementChild.style.transition.timing.function = "ease-in-out";
  })
}

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("mouseleave", function() {
    this.lastElementChild.style.transform = "translateX(100%)";
    this.lastElementChild.style.transition = 0;
    this.lastElementChild.style.opacity = 0;
  })
}
