int motor_pin = 6;

void setup() {

  pinMode(motor_pin, OUTPUT); 

}

void loop() {
  
  for (int i = 0; i < 255; i++) {
    // speed up motor
    analogWrite(motor_pin, i);
    delay(10);
  }

}
