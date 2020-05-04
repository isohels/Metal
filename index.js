// window.onload();
var press = document.querySelectorAll("button")

for(var i = 0; i<8; i++){
press[i].addEventListener('click', function(){
  var buttonInnerHtml = this.innerHTML;

  var clicky = new Sound(buttonInnerHtml);
  clicky.playSound();
  buttonAnimation(buttonInnerHtml);
// if(this.innerHTML==='w'){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
// }
// else if(this.innerHTML=='a'){
//   var audio = new Audio('sounds/kick-bass.mp3');
//   audio.play();
// }
// else if(this.innerHTML=='s'){
//   var audio = new Audio('sounds/snare.mp3');
//   audio.play();
// }
// else if(this.innerHTML=='d'){
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
// }
// else if(this.innerHTML=='j'){
//   var audio = new Audio('sounds/tom-2.mp3');
//   audio.play();
// }
// else if(this.innerHTML=='k'){
//   var audio = new Audio('sounds/tom-3.mp3');
//   audio.play();
// }
// else{
//   var audio = new Audio('sounds/tom-4.mp3');
//   audio.play();
// }
// for Keyboard input
document.addEventListener("keydown",function(){
   var keyBoard = event.key;
   var pressy = new Sound(keyBoard);
   pressy.playSound();
   // alert("Pressed");
   buttonAnimation(keyBoard);
});

});
}






  // if(console.log(this.innerHTML)==w)
function Sound(word){
  this.word=word
  this.playSound = function(){
    switch (word) {
      case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
        break;
      case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
        break;
      case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
        break;
      case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
        break;
      case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
        break;
      case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      case "l":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
      default:
      console.log();

    }
  }
}

// Animation function

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
