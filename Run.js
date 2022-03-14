const character = document.getElementById("character");
const block = document.getElementById("block");
function startGame() {
  if (character.classList != "animation") {
    block.classList.toggle("start");
  }
}
function fun() {
  character.classList.add("jump");
  setTimeout(function () {
    character.classList.remove("jump");
  }, 500);
}
var checkdead = setInterval(() => {
  var chartop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockleft < 40 && blockleft > 0 && chartop >= 190) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("you loose reload the page to start again");
  }
}, 10);
