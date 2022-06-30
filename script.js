/* Get element from DOM */
var accordions = document.getElementsByClassName("btn");
var panels = document.getElementsByClassName("panel");
var arrows = document.getElementsByClassName("arrow");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {

    /* undisplay all accordions except current panel */
    for(let j = 0; j < accordions.length; j++){
      let pan = panels[j];
      let arr = arrows[j];
      if(j!==i && pan.style.display ==="block" ){
        pan.style.display = "none";
        arr.classList.remove('rotate');
      }
    }

    /* Add the rotate class to current accordion and display panel */

    let panel = this.nextElementSibling;
    let arrow = arrows[i];

    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.classList.remove('rotate');
    } 
    else {
      panel.style.display = "block";
      arrow.classList.add('rotate');
    }
  });
}