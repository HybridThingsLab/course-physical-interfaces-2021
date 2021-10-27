//********************************************************
// LIBRARIES
#include "Quadrature.h"

//********************************************************
// GLOBALS


// rotary encoders
#define rotary_1_button 48
Quadrature rotary_1(6, 7);
int pinSwitch = 2;


//*********************************************************
//*********************************************************
// SETUP
void setup() {

  //start serial connection
  Serial.begin(9600);
  //configure pin 2 as an input and enable the internal pull-up resistor
  pinMode(pinSwitch, INPUT_PULLUP);


  // init rotary encoders
  rotary_1.minimum(0);
  rotary_1.maximum(1023);
}

//*********************************************************
//*********************************************************
// LOOP

void loop() {



  Serial.print(rotary_1.position());
  Serial.print(" ");
  Serial.println(digitalRead(pinSwitch));

}
