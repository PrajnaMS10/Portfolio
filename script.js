const typingText = document.querySelector(".change_txt");
const Designation = ["Front-End Developer","Web Developer", "Software Developer"];

let arrayIndex = 1;

function ChangingTxt(){
    if(arrayIndex < Designation.length){
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    }
    else{
        arrayIndex = 0;
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    }
}

ChangingTxt();
setInterval(ChangingTxt,5000);

var button = document.getElementById('redirectButton');

    button.onclick = function() {
      window.location.href = "aboutme.html";
    };