int motor_pin = 6;

void setup() {

  //Setup Channel A
  pinMode(motor_pin, OUTPUT); //Initiates Motor Channel A pin

}

void loop() {
  
  for (int i = 0; i < 255; i++) {
    // speed up motor
    analogWrite(motor_pin, i);   //Spins the motor on Channel A at full speed
    delay(10);
  }

}
