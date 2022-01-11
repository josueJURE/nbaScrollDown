let imgs = document.querySelectorAll("img");
let pictures = document.querySelectorAll(".picture");
console.log(pictures)

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("click", function() {
    this.lastElementChild.style.display = "inline";
  })
}
