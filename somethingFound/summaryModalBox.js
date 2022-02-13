// Get the modal
var summaryModal = document.getElementById("mySummaryModal");
            
// Get the button that opens the modal
var sTestbtn = document.getElementById("mySummaryBtn");
var endBtn = document.getElementById("endButton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
sTestbtn.onclick = sbox;

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


