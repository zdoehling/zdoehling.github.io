// Get the modal
var fightModal = document.getElementById("myFightModal");
            
// Get the button that opens the modal
var fTestbtn = document.getElementById("myFightBtn");
var fightBtn = document.getElementById("fightButton");
var healthWidth = document.getElementById("healthProg");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
fTestbtn.onclick = box;

var fightHealthTimer;
var fightUpdateTimer;
var health = 50;
var dayKills = 6;
var dayFood = 8;
function box(){
  healthWidth.style.width = health;
  fightModal.style.display = "block";
  fightHealthTimer = setInterval(fightDecrease, 100);
  fightUpdateTimer = setInterval(fightUpdate, 20);
  document.getElementById("atk").innerHTML = "ATK " + atkTotal;
}

//close
function fClose() {
  fightModal.style.display = "none";
  clearInterval(fightHealthTimer);
  clearInterval(fightUpdateTimer);
  health = 50;
  fightCount = 1;
  fightTxt = ["You fight. <br><br>"];
}

/*
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

var weaponATK = 10;
var petATK = 5;
var atkTotal = weaponATK + petATK;
var fightCount = 1;

var fightTxt = ["You fight. <br><br>"];

fightBtn.onclick = fight;

function fight(){
  fightTxt = "You fight. " + fightCount + " <br><br>" + fightTxt;
  fightCount++;
    if(health < 100){
      if(health > (100 - atkTotal)){
        fClose();
      } else {
          health = health + atkTotal;
          healthWidth.style.width = health + "%";    
      }
    }else{
        health = 50;
        healthWidth.style.width = health + "%";
    }
}

function fightDecrease() {
  if(health > 0){
      health = health - 1;
      healthWidth.style.width = health + "%";
  } else if(health>=100){
      fight();
  } else {
    close();
  }
}

function fightUpdate(){
    document.getElementById("fightText").innerHTML = fightTxt;
}