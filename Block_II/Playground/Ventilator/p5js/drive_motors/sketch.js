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

  // map mouse X, Y (just for testing)
  let mappedValue1 = int(map(mouseX, 0, width / 2, 255, 0)); // to motor (0,255)
  let mappedValue2 = int(map(mouseX, width / 2, width, 0, 255)); // to motor (0,255)
  let mappedValue3 = int(map(mouseY, 0, height / 2, 255, 0)); // to motor (0,255)
  let mappedValue4 = int(map(mouseY, height / 2, height, 0, 255)); // to motor (0,255)

  // constrain values
  mappedValue1 = constrain(mappedValue1, 0, 255);
  mappedValue2 = constrain(mappedValue2, 0, 255);
  mappedValue3 = constrain(mappedValue3, 0, 255);
  mappedValue4 = constrain(mappedValue4, 0, 255);

  // write value to serial port
  serialController.write("POWER");
  serialController.write(" "); // If sending multiple variables, they are seperated with a blank space
  serialController.write(str(mappedValue1)); // send integer as string
  serialController.write(" "); // If sending multiple variables, they are seperated with a blank space
  serialController.write(str(mappedValue2)); // send integer as string
  serialController.write(" "); // If sending multiple variables, they are seperated with a blank space
  serialController.write(str(mappedValue3)); // send integer as string
  serialController.write(" "); // If sending multiple variables, they are seperated with a blank space
  serialController.write(str(mappedValue4)); // send integer as string
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