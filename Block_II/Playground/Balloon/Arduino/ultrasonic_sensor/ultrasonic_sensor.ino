// ultrasonic sensors
#include "Ultrasonic.h" // downlaod library here: https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip
Ultrasonic ultrasonic_one(7);
Ultrasonic ultrasonic_two(6);

long RangeInCentimeters_one;
long RangeInCentimeters_two;

// interval measure sensor
unsigned long lastMeasurement = 0;
int updateMeasurement = 10; // interval to send value via serial port

void setup() {
  Serial.begin(9600);
}
void loop() {

  // measure ultrasonic sensors
  // just every x (updateMeasurement) milliseconds
  if ((millis() - lastMeasurement) > updateMeasurement) {
  
    // get distance in cm
    RangeInCentimeters_one = ultrasonic_one.MeasureInCentimeters(); 
    RangeInCentimeters_two = ultrasonic_two.MeasureInCentimeters();

    Serial.print(RangeInCentimeters_two);
    Serial.print("cm  ");
    Serial.print(RangeInCentimeters_one);
    Serial.println(" cm");

    // update timestamp last measurment
    lastMeasurement = millis();
  }

}
