let game_sequence = [];
let user_sequence = [];
let buttons = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highest_score=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
  }
  level_up();
});

function game_flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    // btn.classList.add("flash")
    btn.classList.remove("flash");
  }, 250);
}
function user_flash(btn) {
  btn.classList.add("user_flash");
  setTimeout(function () {
    // btn.classList.add("flash")
    btn.classList.remove("user_flash");
  }, 250);
}

function level_up() {
    user_sequence=[];
  level++;
  h2.innerText = `Level ${level}`;

  //random button choose
  let random_idx = Math.floor(Math.random() * 4);
  let random_color = buttons[random_idx];
  let random_button = document.querySelector(`.${random_color}`);
  game_flash(random_button);
  game_sequence.push(random_color);
  console.log(game_sequence);
  // console.log(random_idx);
  // console.log(random_color);
  // console.log(random_button);
  
}
function check_ans(idx) {
  // console.log("current level:="+ level);

  if (user_sequence[idx] === game_sequence[idx]) {
    if(user_sequence.length==game_sequence.length){
        setTimeout(level_up,1000);
    }
    console.log("same value");
  } else {
    h2.innerHTML = `game over !your score was <b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },250);
    reset();
  }
}

function button_press() {
  console.log("button was pressed" + this);
  let button = this;
  user_flash(button);
   let user_color = button.getAttribute("id");

user_sequence.push(user_color);
  console.log(user_sequence);
  check_ans(user_sequence.length-1);
}
let All_buttons = document.querySelectorAll(".btn");
for (btn of All_buttons) {
  btn.addEventListener("click", button_press);
}
function reset(){
    started=false;
    game_sequence=[];
    level=0;


}
function highest_score(){
   if(highest_score >=level){
    console.log();
   }

}