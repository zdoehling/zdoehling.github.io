window.onload = start;

var storyText = ["You are out hunting in the woods. <br><br>"];
var storyTextArray = ["You keep walking. <br><br>", 
"You bump something with your foot. <br><br>", 
"You pickup the object. <br><br>", 
"It seems solid. <br><br>",
"It felt like something moved inside. <br><br>",
"It felt like something moved inside. <br><br>",
"It's bumping against the inside. <br><br>",
"It's bumping against the inside. <br><br>"];
//event vars
//var eTestbtn = document.getElementById("myEventBtn");
//eTestbtn.onclick = ebox;
var eventModal = document.getElementById("myEventModal");
var eventTextBox = document.getElementById("eventTextBox");
var eventText = "I want to be the very best, Like no one ever was. To catch them is my real test, To train them is my cause! (I will travel across the land, Searching far and wide. Each Pokemon to understand The power that's inside!) Pokemon! Gotta catch em' all! It's you and me, I know it's my destiny! Pokemon! Oh, you're my best friend, In a world we must defend! Pokemon! Gotta catch em' all! (A heart so true, Our courage will pull us through!) You teach me and I'll teach you, Po-ke-mon! Gotta catch em' all! Gotta catch em' all! Every challenge along the way, With courage I will face! I will battle every day, To claim my rightful place!";
//mainstory
var mainButtonCount = 0;
var fillBarWidth = 0;
var name = "Creature";
var energy = energyMax;
var energyMax = 25;
var money = 500;
var totalFood = 0;
var withPet = true;
//weapon arrays = [Name, attack, cost] 
var hands = ["Bare Hands",1,0];
var dagger = ["Dagger",5,2];
var sling = ["Sling",10,25];
var spear = ["Spear",20,50];
var javeline = ["Javline",40,100];
var bow = ["Bow",75,500];
//curent player weapon
var allWeapons = [hands,dagger,sling,spear,javeline,bow];
var weaponsBought = 0;
var currentWeapon = allWeapons[weaponsBought];


function start(){
    hideElements();
    setInterval(fillBarIncrease, 10);
    setInterval(storyUpdate, 20);
    document.getElementById("mainButton").onclick = fillBar;
} 

function hideElements(){
    document.getElementById("infoText").style.display = "none";
    //document.getElementById("bars").style.display = "none";
}

function storyUpdate(){
    document.getElementById("story").innerHTML = storyText;
}

function fillBarIncrease(){
    if(fillBarWidth < 100){
        fillBarWidth = fillBarWidth + 1;
        document.getElementById("actionBar").style.width = fillBarWidth + "%";
    } else{

    };
}

function fillBar(){
    if(fillBarWidth == 100){
        fillBarWidth = 0;
        document.getElementById("actionBar").style.width = fillBarWidth + "%";
        mainAction();
        
    } else{
        
        
    }
}

//main story
function mainAction(){
    if(storyTextArray.length <= mainButtonCount){

    } else{
      storyText = storyTextArray[mainButtonCount] + storyText;
    }
    
    if(mainButtonCount == 1){
        document.getElementById("mainButtonText").innerHTML = "Investigate";
    } else if(mainButtonCount == 2){
        document.getElementById("mainButtonText").innerHTML = "Tap";
    } else if(mainButtonCount == 8){
        name = String(prompt("A creature breaks free! What's its name?"));
        if(name.length > 16){
            name = String(prompt("I feel I its name should be under 16 characters."));
            if(name.length > 16){
                name = String(prompt("I'm not sure a name that long really FITS"));
            } if(name.length > 16){
                name = "Long Name McGee";
            }
        }if(name.length < 1){
            name = String(prompt("Don't you want to name them?"));
            if(name.length < 1){
                name = String(prompt("The nameless creature looks up at you expectantly."));
            } if(name.length < 1){
                name = String(prompt("Someone in the distance calls for their friend Jeff, and the creature hears it. If I don't say something now it may think Jeff is it's name."));
            } if(name.length < 1){
                name = "Jeff";
            }
        }
            document.getElementsByClassName("name")[0].innerHTML = name;
            document.getElementById("infoText").style.display = "block";
            //document.getElementById("bars").style.display = "block";
            //call event
            
    } else if(mainButtonCount == 9){
        firstEvent();
    }
mainButtonCount++;
}






///////////////////////////////////////////////
/////             EVENTS                  /////
///////////////////////////////////////////////

var eventLeftBtn = document.getElementById("eventBtn1");
var eventLeftDesc = document.getElementById("eventDesc1");
var eventRightBtn = document.getElementById("eventBtn2");
var eventRightDesc = document.getElementById("eventDesc2");

var eLBtn = "Defend";
var eLDesc = "Start a Battle"
var eRBtn = "Run";
var eRDesc = "Abandon the Creature";

function ebox(){
    eventModal.style.display = "block";
    eventTextBox.innerHTML = eventText;
    eventLeftBtn.innerHTML = eLBtn;
    eventLeftDesc.innerHTML = eLDesc;
    eventRightBtn.innerHTML = eRBtn;
    eventRightDesc.innerHTML = eRDesc;
}


function eboxClose(){
    eventModal.style.display = "none";
}

function firstEvent(){
    eventText = "Just as you were getting to know your new friend a wild creature bursts through the brush! You’ve never seen its species before, but it’s obviously pissed and charging right at you. How did it sneak up on you so quickly? Is this " + name + "’s parent or is it trying to eat them? Whatever it may be, you don’t have time to find out. You’ve got to decide now if you want to fight back or abandon " + name + ".";
    eLBtn = "Fight Back";
    eLDesc = " "
    eRBtn = "Run Away";
    eRDesc = "- Lose " + name;
    //event box button functions
      eventLeftBtn.onclick = eboxLeft;
      function eboxLeft(){
        enemy = beast[0];
        enemyAtk = beast[1];
        fBox();
        eboxClose();   
      }

      eventRightBtn.onclick = eboxRight;
      function eboxRight(){
          eboxClose();
      }
      ebox();
}



///////////////////////////////////////////////
/////             FIGHTING                /////
///////////////////////////////////////////////



// Get the modal
var fightModal = document.getElementById("myFightModal");
            
// Get the button that opens the modal
var fightBtn = document.getElementById("fightButton");
var healthWidth = document.getElementById("healthProg");
// Fighting variables
var pet_item = document.getElementById("pet_item");
var atk = document.getElementById("atk");
var enemyContainer = document.getElementById("enemy");
var enemyAtkContainer = document.getElementById("enemyAtk");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//var fTestbtn = document.getElementById("myFightBtn");
//fTestbtn.onclick = fBox;

var fightHealthTimer;
var fightUpdateTimer;
var health = 50;
var dayKills = 6;
var dayFood = 8;
function fBox(){
  if(!withPet){
    pet_item.innerHTML = currentWeapon[0];
    atk.innerHTML = "ATK " + weaponATK;
  } else {
    fightTxt = fightTxt + name + " jumps in to help. <br><br>"
    pet_item.innerHTML = currentWeapon[0] + " + " + name;
    atk.innerHTML = "ATK " + atkTotal;
  }  
  enemyContainer.innerHTML = enemy;
  enemyAtkContainer.innerHTML = enemyAtk;
  healthWidth.style.width = health;
  fightModal.style.display = "block";
  fightHealthTimer = setInterval(fightDecrease, 100);
  fightUpdateTimer = setInterval(fightUpdate, 20);
  
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

//Enemies
var enemy = "Rat";
var enemyAtk = "1";
var enemyList = [beast, rat, boar, stag];
//Enemy Array [Name, Attack, Meat Reward]
var beast = ["Wild Beast", 5, 30];
var rat = ["Rat", 1, 1];
var snake = ["Viper", 7, 4];
var boar = ["Boar", 10, 50];
var stag = ["Stag", 12, 150];



var weaponATK = currentWeapon[1];
var petATK = 5;
var atkTotal = weaponATK + petATK;
var fightCount = 1;
var fightTxt = ["You fight. <br><br>"];

fightBtn.onclick = fight;

function fight(){
  //fightTxt = "You fight. " + fightCount + " <br><br>" + fightTxt;
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
    fClose();
  }
}

function fightUpdate(){
    document.getElementById("fightText").innerHTML = fightTxt;
}





///////////////////////////////////////////////
/////             SUMMARY                 /////
///////////////////////////////////////////////


// Get the modal
var summaryModal = document.getElementById("mySummaryModal");
            
// Get the button that opens the modal

var endBtn = document.getElementById("endButton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//var sTestbtn = document.getElementById("mySummaryBtn");
//sTestbtn.onclick = sbox;

//SHOP VARIABLES
var shopWeapon = allWeapons[weaponsBought+1];
var wBuyBtn = document.getElementById("shopW_Buy");
wBuyBtn.onclick = buyWeapon;
function buyWeapon(){
  if(money>=shopWeapon[2]){
    money = money - shopWeapon[2];
    document.getElementById("shopMoney").innerHTML = "Money: ѳ" + money;
    weaponsBought++
    shopWeapon = allWeapons[weaponsBought+1];
    loadShopWeapon();
  }
}

function loadShopWeapon(){
  document.getElementById("shopW_Name").innerHTML = shopWeapon[0] + " (ATK " + shopWeapon[1] + ")";
  document.getElementById("shopW_Cost").innerHTML = "ѳ" + shopWeapon[2];
  if(money<shopWeapon[2]){
    document.getElementById("shopWeaponItem").style.color = "#4E4D4F";
    document.getElementById("shopW_Buy").style.backgroundColor = "#4E4D4F";
    document.getElementById("shopW_Buy").style.borderColor = "#4E4D4F";
  }
}
//PET VARIABLES
var petImg = document.getElementById("petImage");




function sbox(){
  //display summary tab first when opened
    summaryModal.style.display = "block";
    sumTab.className = "tab active";
    activeTab = sumTab;
    document.getElementById("sumTabContent").style.display = "block";
    document.getElementById("summaryText").innerHTML = summaryTxt;
  //load variables into content
    document.getElementById("totalFood").innerHTML = "Food: " + totalFood;
    document.getElementById("sumMoney").innerHTML = "Money: ѳ" + money;
    document.getElementById("shopMoney").innerHTML = "Money: ѳ" + money;
    //load shop variables
    loadShopWeapon();
}

//sets clicked tab to active and remove the content from the others
var sumTab = document.getElementById("sumTab");
var shopTab = document.getElementById("shopTab");
var petTab = document.getElementById("petTab");
sumTab.onclick = aTab;
shopTab.onclick = aTab;
petTab.onclick = aTab;
var activeTab = sumTab;
function aTab(){
  activeTab.className = activeTab.className.replace(" active", "");
  activeTab = this;
  this.className += " active";
  if (activeTab == sumTab){
    document.getElementById("shopTabContent").style.display = "none";
    document.getElementById("petTabContent").style.display = "none";
    document.getElementById("sumTabContent").style.display = "block";
  } else if (activeTab == shopTab){
    document.getElementById("petTabContent").style.display = "none";
    document.getElementById("sumTabContent").style.display = "none";
    document.getElementById("shopTabContent").style.display = "block";
  } else if (activeTab == petTab){
    document.getElementById("shopTabContent").style.display = "none";
    document.getElementById("sumTabContent").style.display = "none";
    document.getElementById("petTabContent").style.display = "block";
  }
}


var summaryTxt = ["You head back after you run out of energy. <br><br> From " + dayKills + " kills you bring back " + dayFood + " food. But how to spend the spoils?"];
endBtn.onclick = sumClose;

//close
function sumClose() {
  document.getElementById("shopTabContent").style.display = "none";
  document.getElementById("petTabContent").style.display = "none";
  document.getElementById("sumTabContent").style.display = "block";
  sumTab.className = sumTab.className.replace(" active", "");
  shopTab.className = shopTab.className.replace(" active", "");
  petTab.className = petTab.className.replace(" active", "");
  summaryModal.style.display = "none";
  //set daily variables to 0
    dayKills = 0;
    dayFood = 0;
    energy = energyMax;
}


/*
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */