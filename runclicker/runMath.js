window.onload = start;




var milesRan = 0;
var payCounter = 0;
var money = 0;

var runCounterLabel = "walked";

var multi = 1;
var jobMulti = 1;
var jobMoneyMulti = 1;
var jobCheck = 0;
var textScroll = "Let's start by walking.";
//Item Variable Checks
var clothes = false;
var shoes = false;
var bShoes = false;
var watch = false;

//raceCount
var raceCount = 0;

//job checks
var localCoach = false;
var hsCoach = false;
var profCoach = false;
var olyPacer = false;
var currentJob = "none";
var activeJob = null;




function start() {
    hideItems();
    setInterval(runLabel,10);
    document.getElementById("runButton").onclick = walk;
    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
    document.getElementById("runRace").onclick = runRace;
    //Button Listeners
    //clothes
    document.getElementById("jogClothes").onclick = buyClothes;
    //shoes
    document.getElementById("runShoes").onclick = buyShoes;
    //bShoes
    document.getElementById("betterShoes").onclick = buyBetterShoes;
    //watch
    document.getElementById("watch").onclick = buyWatch;

    //Job buttons
    document.getElementById("localCoach").onclick = runLocalCoach;
    document.getElementById("hsCoach").onclick = runHSCoach;
    document.getElementById("profCoach").onclick = runProfCoach;
    document.getElementById("olyPacer").onclick = runOlyPacer;

    //demo button
    document.getElementById("demoButton").onclick = runDemo;
};

function hideItems(){
    //hide clothes
    document.getElementById("jogClothes").style.visibility = "hidden";
    document.getElementById("runShoes").style.visibility = "hidden";
    document.getElementById("betterShoes").style.visibility = "hidden";
    document.getElementById("watch").style.visibility = "hidden";
    //hide jobs
    document.getElementById("localCoach").style.visibility = "hidden";
    document.getElementById("hsCoach").style.visibility = "hidden";
    document.getElementById("profCoach").style.visibility = "hidden";
    document.getElementById("olyPacer").style.visibility = "hidden";
    //hide race button
    document.getElementById("runRace").style.visibility = "hidden";
    
};

function runLabel(){
    //change run button and multiplyer
    if((milesRan >= 10) && (runCounterLabel == "walked")){
        runCounterLabel = "Jogged";
        textScroll = "We're Jogging Now <br>"  + textScroll;
        multi++;
        document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
        document.getElementById("runButLabel").innerHTML = "Jog";
    }
    if((milesRan >= 100) && (runCounterLabel == "Jogged")){
        runCounterLabel = "Ran";
        textScroll = "Getting some runner's legs! <br>" + textScroll;
        multi++;
        document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
        document.getElementById("runButLabel").innerHTML = "Run";
    }

    //Item Buttons
    //clothes
    if((!clothes) && (milesRan > 50)){
        document.getElementById("jogClothes").style.visibility = "visible";
        clothes = true;
    } 
    //shoes
    if((!shoes) && (milesRan > 550)){
        document.getElementById("runShoes").style.visibility = "visible";
        shoes = true;
    } 

    if((!bShoes) && (milesRan > 1000)){
        document.getElementById("betterShoes").style.visibility = "visible";
        bShoes = true;
    } 

    if((!watch) && (milesRan > 2000)){
        document.getElementById("watch").style.visibility = "visible";
        watch = true;
    } 

    //auto payout from jobs
    //local coach
    if((!localCoach) && (milesRan > 1000)){
        document.getElementById("localCoach").style.visibility = "visible";
        localCoach = true;
    }

    if((!hsCoach) && (milesRan > 2000)){
        document.getElementById("hsCoach").style.visibility = "visible";
        hsCoach = true;
    }

    if((!profCoach) && (milesRan > 3200)){
        document.getElementById("profCoach").style.visibility = "visible";
        profCoach = true;
    }

    if((!olyPacer) && (milesRan > 6000)){
        document.getElementById("olyPacer").style.visibility = "visible";
        olyPacer = true;
    }

    if(milesRan > 5000){
        document.getElementById("runRace").style.visibility = "visible";
    }

    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    document.getElementById("content").innerHTML = textScroll;
    document.getElementById("counterHover").innerHTML = (1*multi) + " Miles Per Click <br> " + (jobCheck*jobMulti) + " M/s & $" + (jobCheck*jobMoneyMulti) + "/s From Jobs";

    
}

function walk(){
    pay();
    milesRan = milesRan + 1*multi;
    
}

function runRace(){
    if(raceCount == 0){
        if(money >= 3000){
            money -= 3000;
            milesRan += 10000;
            document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
            document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
            textScroll = "Such a long run... Show off much? <br>" + textScroll;
            raceCount++;
            document.getElementById("runRace").style.backgroundColor = "#79C99E";
            document.getElementById("runRace").innerHTML = '<div>to the moon! <span class="tooltipText" style="font-size: .5em; width: 200px;">(Become the first moon runner)<br>+999,999,999 Miles<br>-$100,000<br></span></div>';
        } else {
            textScroll = "<span style='color: #E84855'>Ya need more money buddy!</span> <br>" + textScroll;
            document.getElementById("content").innerHTML = textScroll;
        }
    } else if(raceCount == 1){
        if(money >= 100000){
            money -= 100000;
            milesRan += 999999999;
            document.getElementById("moonSound").play();
            raceCount++;
            document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
            document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
            textScroll = "that's one small run for man... <br>" + textScroll;
            document.getElementById("runRace").style.backgroundColor = "#847996";
            document.getElementById("runRace").innerHTML = '<div>Play again! <span class="tooltipText" style="font-size: .5em; width: 200px;">this will reset everything!</span></div>';
        } else {
            textScroll = "<span style='color: #E84855'>Ya need more money buddy! Space is expensive.</span> <br>" + textScroll;
            document.getElementById("content").innerHTML = textScroll;
        }

    } else if(raceCount == 2){
        location.reload();
    }
}

function pay(){
    payCounter += 1*multi;

    if(payCounter >= 5){
        money++;
        payCounter -= 5;
        document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
    }
}

//Buy Items
function buyClothes(){
    if(money >= 50){
        multi++;
        money -= 50;
        document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
        textScroll = "Eyy nice outfit! (+1 Miles per Click) <br>" + textScroll;
        document.getElementById("jogClothes").style.visibility = "hidden";
    } else {
        textScroll = "<span style='color: #E84855'>Ya need more money buddy!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
    
}

function buyShoes(){
    if(money >= 100){
        multi++;
        money -= 100;
        document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
        textScroll = "Now You'll Run Faster! (+1 Miles per Click) <br>" + textScroll;
        document.getElementById("runShoes").style.visibility = "hidden";
    } else {
        textScroll = "<span style='color: #E84855'>Ya need more money buddy!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

function buyBetterShoes(){
    if(money >= 400){
        multi++;
        money -= 400;
        document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
        textScroll = "Are those Dr. Scholl's insoles? (+1 Miles per Click) <br>"+ textScroll;
        document.getElementById("betterShoes").style.visibility = "hidden";
    } else {
        textScroll = "<span style='color: #E84855'>Ya need more money buddy!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

function buyWatch(){
    if(money >= 2000){
        multi+= 5;
        money -= 2000;
        document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
        textScroll = "Apple owns you now. Didn't you read the contract? (+5 Miles per Click) <br>" + textScroll;
        document.getElementById("watch").style.visibility = "hidden";
    } else {
        textScroll = "<span style='color: #E84855'>Ya need more money buddy!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

//Job payouts
function runLocalCoach(){
    if(milesRan >= 1300){
    document.getElementById("jobTitle").innerHTML = "Jobs (Local Coach)";
    jobCheck = 1;
    jobMulti = 10;
    jobMoneyMulti = 5;
    textScroll = "You start part time coaching runners in your area (+10 m/s & +$5/s) <br>" + textScroll;
    document.getElementById("counterHover").innerHTML = (1*multi) + " Miles Per Click <br> " + (jobCheck*jobMulti) + " M/S & $" + (jobCheck*jobMoneyMulti) + "/s From Jobs";
    clearInterval(activeJob);
    activeJob = setInterval(startLocal,1000);
    } else {
        textScroll = "<span style='color: #E84855'>Not Enough Experience. Keep running!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

function startLocal(){
    milesRan += 1*jobMulti;
    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    money += 1*jobMoneyMulti;
    document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
}

function runHSCoach(){
    if(milesRan >= 2500){
    document.getElementById("jobTitle").innerHTML = "Jobs (High School Coach)";
    jobCheck = 1;
    jobMulti = 15;
    jobMoneyMulti = 10;
    textScroll = "You get hired to coach the high school track team (+15 m/s & +$10/s) <br>" + textScroll;
    document.getElementById("counterHover").innerHTML = (1*multi) + " Miles Per Click <br> " + (jobCheck*jobMulti) + " M/S & $" + (jobCheck*jobMoneyMulti) + "/s From Jobs";
    clearInterval(activeJob);
    activeJob = setInterval(startHS,1000);
    } else {
        textScroll = "<span style='color: #E84855'>Not Enough Experience. Keep running!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

function startHS(){
    milesRan += 1*jobMulti;
    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    money += 1*jobMoneyMulti;
    document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
}

function runProfCoach(){
    if(milesRan >= 5000){
    document.getElementById("jobTitle").innerHTML = "Jobs (Professional Coach)";
    jobCheck = 1;
    jobMulti = 50;
    jobMoneyMulti = 25;
    textScroll = "Professional athletes start to notice you and hire you (+50 m/s & +$25/s) <br>" + textScroll;
    document.getElementById("counterHover").innerHTML = (1*multi) + " Miles Per Click <br> " + (jobCheck*jobMulti) + " M/S & $" + (jobCheck*jobMoneyMulti) + "/s From Jobs";
    clearInterval(activeJob);
    activeJob = setInterval(startProf,1000);
    } else {
        textScroll = "<span style='color: #E84855'>Not Enough Experience. Keep running!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

function startProf(){
    milesRan += 1*jobMulti;
    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    money += 1*jobMoneyMulti;
    document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
}

function runOlyPacer(){
    if(milesRan >= 10000){
    document.getElementById("jobTitle").innerHTML = "Jobs (Olympic Pacer)";
    jobCheck = 1;
    jobMulti = 100;
    jobMoneyMulti = 100;
    textScroll = "Olympians pay to train along side you (+100 m/s & +$100/s) <br>" + textScroll;
    document.getElementById("counterHover").innerHTML = (1*multi) + " Miles Per Click <br> " + (jobCheck*jobMulti) + " M/S & $" + (jobCheck*jobMoneyMulti) + "/s From Jobs";
    clearInterval(activeJob);
    activeJob = setInterval(startOly,1000);
    } else {
        textScroll = "<span style='color: #E84855'>Not Enough Experience. Keep running!</span> <br>" + textScroll;
        document.getElementById("content").innerHTML = textScroll;
    }
}

function startOly(){
    milesRan += 1*jobMulti;
    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    money += 1*jobMoneyMulti;
    document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
}

//tool tip text
var tooltips = document.getElementsByClassName('tooltipText');
window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
}

//demo button
function runDemo(){
    milesRan += 100;
    money += 100;
    document.getElementById("runCounter").innerHTML = "Miles " + runCounterLabel + ": " + milesRan;
    document.getElementById("moneyCounter").innerHTML = "Workout Budget: $" + money;
}