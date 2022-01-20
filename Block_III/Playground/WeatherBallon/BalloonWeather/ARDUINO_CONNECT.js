//Speech Variablen 
let speechRec = new p5.SpeechRec(); // new P5.SpeechRec object
let result = "Press to record";
speechRec.onResult = showResult;


//Mithilfe einer json-Datei die Daten importieren und Variablen erstellen, um diese dort zu speichern
let json;
let wind_speed = " ";
let wind_direction = " ";
let currentCity = " ";
let APPID = "xxx"; // your API key from https://home.openweathermap.org/;


//ARDUINO SERIAL CONTROLLER
let connectButton;
let serialController = new SerialController(57600);

function setup() {

  // canvas
  createCanvas(windowWidth, windowHeight);
  // framerate
  frameRate(60);

  //Startet die Spracherkennung
  button = createImg('Globe.png');
  button.position(windowWidth / 2 - 150, windowHeight / 2 - 150);
  button.size(300, 300);
  button.mousePressed(startSpeechRecognition);

  connectButton = createButton("Initialize Serial Connection");
  connectButton.position(20, 20);
  connectButton.mousePressed(initSerial);
}

function draw() {
  background(156, 197, 226);

  //Eingabe umwandeln
  if (result != " ") {
    if (result === "Japan.") {
      currentCity = "Tokio";
    }

    if (result === "Germany.") {
      currentCity = "Berlin";
    }

    if (result === "England.") {
      currentCity = "London";
    }

    if (result === "Russia.") {
      currentCity = "Moskau";
    }

    if (result === "China.") {
      currentCity = "Peking";
    }

    if (result === "USA.") {
      currentCity = "New York";
    }

    if (result === "Italy.") {
      currentCity = "Rom";
    }

    if (result === "South Korea") {
      currentCity = "Seoul";
    }

    if (result === "Canada.") {
      currentCity = "Quebec";
    }

    if (result === "South Africa.") {
      currentCity = "Kapstadt";
    }

    textAlign(CENTER);
    textSize(50);
    text(result, windowWidth / 2, windowHeight / 3);
  }

  // Wetterdaten nur alle 80 Ms lesen
  if (frameCount % 80 == 0 && currentCity != " ") {

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&APPID=" + APPID;
    json = loadJSON(url, setData());

    // send data to arduino 
    console.log(wind_direction);

    serialController.write("wind");
    //serialController.write(" ");
    //serialController.write(str(wind_speed));
    serialController.write(" ");
    serialController.write(str(wind_direction));
    serialController.write("\r\n");


  }

  // Ergebnisse der Wetterabfrage anzeigen
  fill(255);
  textAlign(LEFT);
  stroke(6, 47, 76);
  strokeWeight(3);
  textFont('Georgia');
  textStyle(BOLD);
  text("City: " + currentCity, windowWidth / 100, windowHeight / 4);
  text("wind speed: " + wind_speed, windowWidth / 100, windowHeight / 2);
  text("wind direction: " + wind_direction, windowWidth / 100, 3 * windowHeight / 4);


  textAlign(RIGHT);
  text("Japan", 99 * windowWidth / 100, windowHeight / 2 - 450);
  text("Germany", 99 * windowWidth / 100, windowHeight / 2 - 350);
  text("Russia", 99 * windowWidth / 100, windowHeight / 2 - 250);
  text("USA", 99 * windowWidth / 100, windowHeight / 2 - 150);
  text("South Africa", 99 * windowWidth / 100, windowHeight / 2 - 50);
  text("South Korea", 99 * windowWidth / 100, windowHeight / 2 + 50);
  text("Italy", 99 * windowWidth / 100, windowHeight / 2 + 150);
  text("England", 99 * windowWidth / 100, windowHeight / 2 + 250);
  text("Canada", 99 * windowWidth / 100, windowHeight / 2 + 350);
  text("China", 99 * windowWidth / 100, windowHeight / 2 + 450);
}

//Ließt die Daten und speichert sie in den bereits erstellten Variablen
function setData() {
  if (json != undefined) {
    wind_speed = json.wind.speed;
    wind_direction = json.wind.deg;
  }
}


// show result
function showResult() {

  if (speechRec.resultValue == true) {
    result = speechRec.resultString;
    currentCity = result;

    console.log(result);

    /*serialController.write("wind");
    //serialController.write(" ");
    //serialController.write(str(wind_speed));
    serialController.write(" ");
    serialController.write(str(wind_direction));
    serialController.write("\r\n");*/
  }
}

// start speech recognition
function startSpeechRecognition() {

  speechRec.start();
  result = "...";
  console.log("...");
}


//Verbindung herstellen
function initSerial() {
  serialController.init();
}