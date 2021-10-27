/******************************************************************************
 *  quadrature_two_encoders
 *  Keith Neufeld
 *  July 4, 2008
 *
 *  Read and decode two quadrature rotary encoders.
 *
 *  Demo system has encoders connected to digital pins 8/10 and 9/11.
 ******************************************************************************/

#include "Quadrature.h"

Quadrature quad1(8, 10);
Quadrature quad2(9, 11);


void setup() {
  Serial.begin(9600);
  
  quad1.minimum(0);
  quad1.maximum(150);
  quad2.minimum(-5);
  quad2.maximum(5);
}


void loop() {
  Serial.print(quad1.position());
  Serial.print("\t");
  Serial.println(quad2.position());
  delay(100);
}
