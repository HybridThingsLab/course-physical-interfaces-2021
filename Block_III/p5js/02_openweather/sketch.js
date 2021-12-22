// get current weather data via openweathermap API
// https://openweathermap.org/current


let json;
let wind_speed = "no data";
let wind_direction = "no data";
let currentCity = "Tokio";
let APPID = "bb5ca9ea4e2319a2d291c857fe47e933"; // your API key from https://home.openweathermap.org/;


function setup() {

  // canvas
  createCanvas(800, 600);
  // framerate
  frameRate(60);
}

function draw() {
  background(0);

  // just every x frames (just every second)
  if (frameCount % 65 == 0) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&APPID=" + APPID;
    json = loadJSON(url, setData());
  }

  // Display all the stuff we want to display
  fill(255);
  text("City: " + currentCity, 10, 50);
  text("wind speed: " + wind_speed, 10, 70);
  text("wind direction: " + wind_direction, 10, 90);
}

function setData() {
  if (json != undefined) {
    wind_speed = json.wind.speed;
    wind_direction = json.wind.deg;
  }
}