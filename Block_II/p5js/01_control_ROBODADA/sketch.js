// use Chrome Browser
// enable the 'experimental-web-platform-features' flag opening 'chrome://flags'

// serial magic happens here > "libraries/webserial.js" 
// good documentation web serial API: https://web.dev/serial/


let connectButton;
let serialController;

function setup() {

  // canvas
  canvas = createCanvas(640, 480).parent('canvas');

  // init serial connection with baudrate
  serialController = new SerialController(115200);

  // init gui
  connectButton = createButton("Initialize Serial Connection");
  connectButton.class("button");
  connectButton.mousePressed(initSerial);
}

function draw() {

  // background
  background(0);

  // mappe mouse x, y
  let mappedMouseX = int(map(mouseX, 0, width, 0, 180)); // to servo (0-180)
  let mappedMouseY = int(map(mouseY, 0, height, 180, 0)); // to servo (0-180)

  // constrain values
  mappedMouseX = constrain(mappedMouseX, 0, 180);
  mappedMouseY = constrain(mappedMouseY, 0, 180);

  // write value to serial port
  serialController.write("CONTROL");
  serialController.write(" "); // If sending multiple variables, they are seperated with a blank space
  serialController.write(str(mappedMouseX)); // send integer as string
  serialController.write(" "); // If sending multiple variables, they are seperated with a blank space
  serialController.write(str(mappedMouseY)); // send integer as string
  serialController.write("\r\n"); // to finish your message, send a "new line character"

  // instructions
  fill(255);
  textAlign(CENTER, CENTER);
  text("move mouse over canvas", width / 2, height / 2);

}

// init serial connection
function initSerial() {
  serialController.init();
}