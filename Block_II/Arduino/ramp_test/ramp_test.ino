// include ramp library, https://github.com/siteswapjuggler/RAMP
#include <Ramp.h>
// ramp
rampInt speed_motors;

// interval change speed
unsigned long lastChange = 0;
int updateChange = 1000;
int timeChange = 300;
int speed_motor = 0;

// serial
unsigned long lastSent = 0;
int updateSerial = 10; // interval to send value via serial port

void setup() {
  // init serial
  Serial.begin(9600);
}

void loop() {

  // update ramp
  speed_motors.update();

  // interval change speed
  if ((millis() - lastChange) > updateChange) {
    int speed = random(-300,300);
    speed_motors.go(speed, timeChange);
    // update timestamp last change
    lastChange = millis();
  }
  // Do not try to send Serial stuff too often, be prevent this by checking when we sent the last time
  if ((millis() - lastSent) > updateSerial) {
    Serial.print("current speed: ");
    int mapped_value = map(speed_motors.getValue(), 0, 600, -300, 300);
    Serial.println(speed_motors.getValue());
    // update timestamp last sent
    lastSent = millis();
  }


}
