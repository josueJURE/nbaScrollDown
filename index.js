let imgs = document.querySelectorAll("img");
console.log(imgs)

for(var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function() {
    console.log('it works')
  })
}
