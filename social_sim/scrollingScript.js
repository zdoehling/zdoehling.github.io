// Fetch variables
//alert("Social Sim: See where your relationships stand in one year.");
var scrollBox = document.getElementById("scrollBox");
var eventBox = document.getElementById("eventBox");
document.getElementById("scrollBox").onscroll = infinite;
volume = .5;

//reloading images
var srcArray = ["https://source.unsplash.com/random/1600x900", "https://source.unsplash.com/random/1000x1000", "https://source.unsplash.com/random/800x600"];


//var images = ['<img src="blue box.jpg" alt=""><br>', '<img src="blue box.jpg" alt=""><br>', '<img src="blue box.jpg" alt=""><br>'];
var num = 0;
var clickCount = 0;
var likes = 0;
var followers= 0;
var eventNum = 0;
var timeCount = 1;
var timeTrack = 0;
var days = 0;
var scrollOpacity = 100;
var chatOpacity = 100;
var audioMax = 25;
var volTrack = audioMax;
var storedEventsArray = ["You chat with a neighbor while walking your dog.<br>", "You grab dinner with a friend.<br>", "You chat with an acquaintance at the grocery store.<br>", "You hang out with that coworker you've been meaning too.<br>", "1<br>"];
var displayedEvents = ["Events Displayed Here<br>"];
var partyBox = document.getElementById("partyBox");
var convBox = document.getElementById("convBox");
var convCounter = "you";
var imageBase = ['<img id="img1" src="https://source.unsplash.com/random/1600x900" alt="" onclick="like()"><br>','<img id="img2" src="https://source.unsplash.com/random/1000x1000" alt="" onclick="like()"><br>','<img id="img3" src="https://source.unsplash.com/random/800x600" alt="" onclick="like()"><br>'];

function infinite(){
  if(partyBox.style.display = "none"){
    partyBox.style.display = "block";
    convBox.style.display = "none";
  }
  
  if((scrollBox.clientHeight + scrollBox.scrollTop == scrollBox.scrollHeight) && scrollOpacity > 0){
    scrollBox.innerHTML+= '<img id="img1" src="https://source.unsplash.com/random?sig=' + Math.floor(Math.random() * 10000) + ' alt="" onclick="like()"><br>';
    scrollBox.innerHTML+= '<img id="img1" src="https://source.unsplash.com/random?sig=' + Math.floor(Math.random() * 10000) + ' alt="" onclick="like()"><br>';
    scrollBox.innerHTML+= '<img id="img1" src="https://source.unsplash.com/random?sig=' + Math.floor(Math.random() * 10000) + ' alt="" onclick="like()"><br>';
    //scrollBox.scrollTop = scrollBox.scrollHeight * (.6);
    

    num++;
    if(Math.floor(Math.random() * 6) == 1){
      followers++;
      document.getElementById("followers").innerHTML = "Followers: " + followers + " ";
    }
    document.getElementById("numCount").innerHTML = "Scrolled: " + num + "   ";
    
    if((num+likes+followers)%2 == 0 && scrollOpacity > 0){
      chatOpacity = chatOpacity - 5;
      document.getElementById("peopleImg").style.opacity = chatOpacity/100;
      volTrack = volTrack - (audioMax*.05);
      sound.volume = volTrack/100;
      if(scrollOpacity <= 100){
        scrollOpacity = scrollOpacity + 5;
        document.getElementById("scrollBox").style.opacity = scrollOpacity/100;
      }
    }
  
  
  }
  
  

  //document.getElementById("scrollBox").innerHTML = images.push('<img src="blue box.jpg" alt=""><br>');
}

function soundGo(){
  if(sound.paused){
    sound.play();
    sound.volume = .25;
  }
}

var sound = new Audio('crowd.mp3');

function start(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("sim").style.display = "block";
  setInterval(time, 1000);
}

function time(){
    if(sound.currentTime >= 35){
    sound.currentTime = 5;
  }
  timeCount++;
  days++;
  /* timer width
  document.getElementById("timerFill").style.width = timeCount/3.65 + "%";
  if(days >= 11){
    document.getElementById("timerFill").innerHTML = days + " Days";
  } else {
    document.getElementById("timerFill").innerHTML = days;
  }
  
  if(timeCount >= 365){
    if((likes+followers+num) >= 260){
      alert("Social Media Influencer: You spent so much time on social media it was basically your full time job, and now it is! You make money advertising products to your followers, however you are disconnected from those around you as you spend so much time on your phone it's hard for you to be present.");
    } else if (eventNum >= 20){
      alert("A close friend... to those nearby: You make the time and engage with the people around you which they cherish greatly. It is clear you value your friendships, however, you find it hard to maintain your relationships from previous jobs or cities. You don't reachout or post what you're up to on social media, so it's hard for them to know what you're up to.");
    } else {
      alert("A balance that works for you: You often find yourself scrolling through social media to keep up, but it doesn't typically distract you from interacting with others outside of a digital realm. You typically use social media platforms to keep up with others from far away and to see what everyone is up to which is nice as you are informed, but you often tend to feel as though you aren't busy enough compared to what you see online.");
    }
    clearInterval(rate);
    
  }
  if(timeCount == 7 && eventNum == 0){
    partyBox.style.border = "4px solid #add8e6";
  }
  if(timeCount == 8){
    partyBox.style.border = "none";
  }
  */
  


};


function eventCount(){
  if(timeTrack < timeCount){
    if(timeTrack%12 == 0){
      eventNum++;
      displayedEvents = storedEventsArray[eventNum-1] + displayedEvents;
      document.getElementById("eventList").innerHTML = displayedEvents;
    }
    timeTrack = timeCount;
  }
  document.getElementById("eventCount").innerHTML = "In-Person Interaction: " + eventNum;
};

function like(){
  clickCount++;
  if(clickCount%2 == 0 && scrollOpacity > 0){
    likes++;
    document.getElementById("likes").innerHTML = "Likes: " + likes + "   ";
  }
}

function talk(){
  if(partyBox.style.display = "block" && chatOpacity > 0){
    partyBox.style.display = "none";
    convBox.style.display = "block";
  }
  if(timeTrack < timeCount){
    if(convCounter == "you"){
      document.getElementById("conv").src = "photos/youTalk.png";
      convCounter = "they";
    } else {
      document.getElementById("conv").src = "photos/theyTalk.png";
      convCounter = "you";
    }
  timeTrack = timeCount;
  if(timeTrack%1 == 0 && chatOpacity > 0){
    eventNum++;
    document.getElementById("eventCount").innerHTML = "In-Person Interaction: " + eventNum;
    scrollOpacity = scrollOpacity - 5;
    document.getElementById("scrollBox").style.opacity = scrollOpacity/100;

    if(chatOpacity <= 100){
      chatOpacity = chatOpacity + 5;
      volTrack = volTrack + (audioMax*.05);
      if(volTrack%100 != volTrack){
        volTrack = 100;
        sound.volume = volTrack/100;
      } else {
        sound.volume = volTrack/100;
      }
      document.getElementById("peopleImg").style.opacity = chatOpacity/100;
    }
    
  } 
  } 
}

function social(){
  timeCount = 365;
  //document.getElementById("timerFill").style.width = "100%";
  likes = 40;
  num = 142;
  followers = 81;

  document.getElementById("likes").innerHTML = "Likes: " + likes + " ";
  document.getElementById("eventCount").innerHTML = "In-Person Interaction: " + eventNum;
  document.getElementById("timerFill").innerHTML = days + " Days";
  document.getElementById("followers").innerHTML = "Followers: " + followers + " ";
  document.getElementById("numCount").innerHTML = "Scrolled: " + num + " ";
}


/* timer info
function events(){
  timeCount = 365;
  document.getElementById("timerFill").style.width = "100%";
  eventNum = 21;

  document.getElementById("likes").innerHTML = "Likes: " + likes + " ";
  document.getElementById("eventCount").innerHTML = "In-Person Interaction: " + eventNum;
  document.getElementById("timerFill").innerHTML = days + " Days";
  document.getElementById("followers").innerHTML = "Followers: " + followers + " ";
  document.getElementById("numCount").innerHTML = "Scrolled: " + num + " ";
}

function mid(){
  timeCount = 365;
  document.getElementById("timerFill").style.width = "100%";

  document.getElementById("likes").innerHTML = "Likes: " + likes + " ";
  document.getElementById("eventCount").innerHTML = "In-Person Interaction: " + eventNum;
  document.getElementById("timerFill").innerHTML = days + " Days";
  document.getElementById("followers").innerHTML = "Followers: " + followers + " ";
  document.getElementById("numCount").innerHTML = "Scrolled: " + num + " ";
}
*/

/*tooltip
var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x + 20) + 'px';
};
*/

/*

var scrollTop = document.getElementById("scrollBox").scrollTop();
var windowHeight = window.height();
var bodyHeight = document.getElementById("scrollBox").height() - windowHeight;
var scrollPercentage = (scrollTop / bodyHeight);

var images = ['<img src="blue box.jpg" alt=""><br>', '<img src="blue box.jpg" alt=""><br>', '<img src="blue box.jpg" alt=""><br>'];

// if the scroll is more than 90% from the top, load more content.
if(scrollPercentage > 0.9) {
	document.getElementById("scrollBox").innerHTML = images.push('<img src="blue box.jpg" alt=""><br>');
}

Different try below

$('#right-column').on('scroll', function (e) {
    var $this = $(this),
        $items = $("#items"),
        scrollPosition = $this.scrollTop();

    if (scrollPosition > ($this.data('scroll-position') || 0)) {
        // Scrolling down
        var threshold = $items.height() - $this.height() - $('.item:last-child').height();
      
      	if (scrollPosition > threshold) {
          	var $firstResult = $('.item:first-child');
            $items.append($firstResult);
          	scrollPosition -= $firstResult.height();
            $this.scrollTop(scrollPosition);
        }
    } else {
        // Scrolling up
        var threshold = $('.item:first-child').height();
        if (scrollPosition < threshold) {
            var $lastResult = $('.item:last-child');
            $items.prepend($lastResult);
          	scrollPosition += $lastResult.height();
            $this.scrollTop(scrollPosition);
        }
    }
  	$this.data('scroll-position', scrollPosition)
});

$('#items').on('click', '.item', function (e) {
  	$(this).find('.details').toggle();
});

$('#newNumber').on('input', function (e) {
    var items = '';
    for (var n = 1; n <= $(this).val(); n++) {
        items += 
          '<div class="item" id="item' + n + '">' +
          '    <div class="main">Item ' + n + '</div>' +
          '    <div class="details">Details for item ' + n + '</div>' +
          '</div>';
    }
  	$('#items').html(items);
});
*/