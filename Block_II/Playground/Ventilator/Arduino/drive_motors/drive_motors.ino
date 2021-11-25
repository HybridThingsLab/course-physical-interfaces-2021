// use of MOSFET to drive motors
// hhttps://wiki.seeedstudio.com/Grove-MOSFET/

// Funken library
// Download the Funken library here: https://github.com/astefas/Funken/tree/master/bin
// Install with Sketch > Include Library > Add .ZIP Library
#include <Funken.h>

// instantiation of Funken
Funken fnk;

// These constants won't change. They're used to give names to the pins used:
const int pinMotor1 = 3;
const int pinMotor2 = 5;
const int pinMotor3 = 6;
const int pinMotor4 = 9;

void setup() {

  // init funken
  fnk.begin(115200, 0, 0); // higher baudrate for better performance
  fnk.listenTo("POWER", power); // however you want to name your callback

}

void loop() {

  // needed to make FUNKEN work
  fnk.hark();

}

void power(char *c) {

  // get first argument
  char *token = fnk.getToken(c); // is needed for library to work properly, but can be ignored

  // read values to drive motor
  int value1 = atoi(fnk.getArgument(c));
  int value2 = atoi(fnk.getArgument(c));
  int value3 = atoi(fnk.getArgument(c));
  int value4 = atoi(fnk.getArgument(c));

  // drive motors
  analogWrite(pinMotor1, value1);
  analogWrite(pinMotor2, value2);
  analogWrite(pinMotor3, value3);
  analogWrite(pinMotor4, value4);

}
