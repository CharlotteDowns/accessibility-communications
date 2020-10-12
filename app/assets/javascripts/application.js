/* global $ */

var correct = true,
    incorrect = false;

function getID(anyID) {
    return document.getElementById(anyID);
}

function giveAns(){
    alert("correct");
}

/*for (i=0; i<20; i++) {
    images[i] = i%2===0;
}*/

window.onload = function(){
        correct=getID("img1");
        incorrect=getID("img2");
        incorrect.onclick = function(){
            giveAns();
        }
        correct.onclick = function() {
            giveAns();
        }
}
// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
