var x= 0.0;
var col = 0.0;

var osc, fft;

function setup() {
  colorMode(HSB, 800, 100, 100);
  createCanvas(600, 600);
  background(0);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(1);

  /*fft = new p5.FFT();
  osc.start();*/
}


function draw() {
  if (x<250) {      //ellipse will increase until it reaches 810
    //fill(0);
    noFill();
    stroke(col, 3*col, 100);
    ellipse(mouseX, mouseY, x, x);
    x += 1;
    col += 3.5;
  }
  else {   //ellipse will loop back to 0 then go back
    //saveFrame();
    x=0;
    col = 0;
    background(0);
  }

  noStroke();

  osc.freq(mouseX*0.25);

  var amp = map(mouseY, 0, height, 0.25, .01);
  osc.amp(amp);

}

function mousePressed() {                   // once mouse is pressed, it will clear to background
  background(0);
  x=0;
}
