let imgs = document.querySelectorAll("img");
let pictures = document.querySelectorAll(".picture");
console.log(pictures)

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("mouseover", function() {
    this.lastElementChild.style.transform = "translateX(30%)";
    this.lastElementChild.style.opacity = 1;
  })
}

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("mouseleave", function() {
    this.lastElementChild.style.display = "none";
  })
}
