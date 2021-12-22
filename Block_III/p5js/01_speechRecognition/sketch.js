// speech recognition
let speechRec = new p5.SpeechRec(); // new P5.SpeechRec object
let result = "";
speechRec.onResult = showResult;


function setup() {
  createCanvas(800, 600);

  background(255, 255, 255);
  fill(0, 0, 0, 255);

  textSize(25);
  textAlign(LEFT);

  button = createButton('press and say something');
  button.position(20, 20);
  button.size(200, 30);
  button.mousePressed(startSpeechRecognition);

}

function draw() {

  background(0);
  fill(255);

  // show result
  text(result, 30, 200);

}

// show result
function showResult() {

  if (speechRec.resultValue == true) {
    result = speechRec.resultString;
    console.log(result + " ");
  }
}

// start speech recognition
function startSpeechRecognition() {

  speechRec.start();
  result = "recording...";
  console.log("recording...");
}