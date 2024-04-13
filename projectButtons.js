var tileLinks = [
    "kc.html",
    "cheers.html",
    "ati.html",
    "heritage.html",
    "gatech.html", 
    "thesis.html", 
    "venmo.html",
    "soarSouth.html",
];

var previous = "'location.href= " + tileLinks[tileLinks.length - 1] + "'";
var next = "heritage.html";

var bottomButtons = document.getElementsByClassName("dirButton");

var currentPage = document.location.href.substring(document.location.href.lastIndexOf( '/' )+1);

function prevClick()
{
    if(tileLinks.indexOf(currentPage, fromIndex = 0) == 0){
        window.location.href = tileLinks[tileLinks.length - 1];
    } else{
        window.location.href = tileLinks[tileLinks.indexOf(currentPage, fromIndex = 0) - 1];
    }
}
function nextClick()
{
    if(tileLinks.indexOf(currentPage, fromIndex = 0) == (tileLinks.length - 1)){
        window.location.href = tileLinks[0];
    } else{
        window.location.href = tileLinks[tileLinks.indexOf(currentPage, fromIndex = 0) + 1];
    }
}

bottomButtons[0].onclick=prevClick;
bottomButtons[1].onclick=nextClick;



