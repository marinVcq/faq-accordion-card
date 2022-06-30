/* Get element from DOM */
var accordions = document.getElementsByClassName("btn");
var panels = document.getElementsByClassName("panel");
var arrows = document.getElementsByClassName("arrow");
var labels= document.getElementsByClassName('acc-label');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {

    /* undisplay all accordions except current panel */
    for(let j = 0; j < accordions.length; j++){

      let pan = panels[j];
      let arr = arrows[j];
      let lab = labels[j];

      if(j!==i && pan.style.display ==="block" ){
        pan.style.display = "none";
        arr.classList.remove('rotate');
        lab.classList.remove('selected');
      }
    }

    /* Add the rotate and selected class to current accordion and display panel */

    let panel = this.nextElementSibling;
    let arrow = arrows[i];
    let label = labels[i];

    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.classList.remove('rotate');
      label.classList.remove('selected');
    } 
    else {
      panel.style.display = "block";
      arrow.classList.add('rotate');
      label.classList.add('selected');
    }
  });
}