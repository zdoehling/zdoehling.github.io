var slider = document.getElementById("volume");
var output = document.getElementById("volSlideNum");
var volMulti = 20000;
var slider2 = document.getElementById("frequency");
var output2 = document.getElementById("freqSlideNum");
var freqMulti = 3;
output.innerHTML = slider.value; // Display the default slider value
output2.innerHTML = slider2.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    volMulti = slider.value;
}
slider2.oninput = function() {
    output2.innerHTML = this.value;
    freqMulti = slider2.value;
}