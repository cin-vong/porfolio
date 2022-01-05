var zoomImg = function () {
    // Creer une zoom
    var clone = this.cloneNode();
    clone.classList.remove("img-responsive");
  
    // Mise en place du lightbox
    var lb = document.getElementById("lb-img");
    lb.innerHTML = "";
    lb.appendChild(clone);
  
    // LIGHTBOX
    lb = document.getElementById("lb-back");
    lb.classList.add("show");
  };
  
  window.addEventListener("load", function(){
    // Click Image pour Zommer
    var images = document.getElementsByClassName("img-responsive");
    if (images.length>0) {
      for (var img of images) {
        img.addEventListener("click", zoomImg);
      }
    }
  
    // Click Image pour fermer
    document.getElementById("lb-back").addEventListener("click", function(){
      this.classList.remove("show");
    })
  });