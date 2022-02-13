

let mic;
const barWidth = 1;
let lastBar = -1;
let period = 0;
var start = 0;
var controls = 0;
var freqAvg = [];
var volAvg = [];

function setup() {
  //mic
  mic = new p5.AudioIn();
  mic.start();
  //frequency
  fft = new p5.FFT();
  fft.setInput(mic);
  
  //creating initial canvas
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('container');
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  frameRate(20);
}

function startCheck(){
  if(start == 0){
    document.getElementById("pauseButton").innerHTML = 'Pause';
    start = 1;
  } else{
    document.getElementById("pauseButton").innerHTML = 'Start';
    start = 0;
  }
}

function calibrate(){
  var freqTotal = 0;
  for(var i = 0; i < freqAvg.length; i++) {
    freqTotal += freqAvg[i];
  }
  var fAvg = freqTotal / freqAvg.length;
  freqMulti = 300/fAvg;
  output2.innerHTML = int(freqMulti);

  var volTotal = 0;
  for(var i = 0; i < volAvg.length; i++) {
    volTotal += volAvg[i];
  }
  var vAvg = volTotal / volAvg.length;
  volMulti = 240/vAvg;
  output.innerHTML = int(volMulti);
  

}


function draw() {
  if(start == 1){
    
    let vol = mic.getLevel();
    let freq = fft.analyze();
    let whichBar = period / barWidth;
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth;
      freqAvg.push(freq[17]);
      volAvg.push(vol);
	freqStored = freq[17];
	if(freqStored > height){
		freqStored = freqStored%height;
	}
      fill((freqStored*freqMulti), height, (vol*volMulti));
      rect(barX, 0, barWidth, height);
      lastBar = whichBar;
      document.getElementById("position").innerHTML = " Volume Value: " + (vol*volMulti) + "Frequency Value: " + (freqStored*freqMulti);
      //period = period + 2; /* this adds a 1 bar gap between */
      period++;
      if(period > windowWidth) {
        noLoop(); 
      }
    }
  }
}
