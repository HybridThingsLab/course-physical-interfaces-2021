// import of Funken
#include <Funken.h> // find library here: https://github.com/astefas/Funken
#include "PCA9685.h" // find library here: https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip
#include <Wire.h>

// instantiation of Funken
Funken fnk;

// servos
ServoDriver servo;

/*
   THE SETUP
*/
void setup() {

  // init funken
  fnk.begin(115200, 0, 0); // higher baudrate for better performance
  fnk.listenTo("CONTROL", control);

  // init servos using Grove - 16 Channel PWM Driver (https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/)
  // join I2C bus (I2Cdev library doesn't do this automatically)
  Wire.begin();
  servo.init(0x7f);

}

/*
   THE LOOP
*/
void loop() {
  // needed to make FUNKEN work
  fnk.hark();
}

void control(char *c) {

  // get first argument
  char *token = fnk.getToken(c); // is needed for library to work properly, but can be ignored

  // drive servos
  int value1 = atoi(fnk.getArgument(c));
  int value2 = atoi(fnk.getArgument(c));

  servo.setAngle(1, value1 ); // servo 1 connected to P1
  servo.setAngle(2, value2 ); // servo 1 connected to P2

}
