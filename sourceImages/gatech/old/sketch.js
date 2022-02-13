let mic;
const barWidth = 1;
let lastBar = -1;
let period = 0;
let canvasY = 600
var stop = 0;


function setup() {
  //mic
  mic = new p5.AudioIn();
  mic.start();
  //frequency
  fft = new p5.FFT();
  fft.setInput(mic);
  
  //creating initial canvas
  createCanvas(windowWidth, canvasY);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  frameRate(20);
}



function draw() {
  let vol = mic.getLevel();
  let freq = fft.analyze();
  let whichBar = period / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    
    fill((freq[17]*freqMulti), height, (vol*volMulti));
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
    document.getElementById("position").innerHTML = "Frequency Value: " + (freq[17]*freqMulti) + " Volume Value: " + (vol*volMulti);
    period++;
    if(period > windowWidth || stop > 0) {
      noLoop(); 
    }
  }
}