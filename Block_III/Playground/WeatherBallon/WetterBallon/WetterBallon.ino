#include <Funken.h>


Funken fnk;

int i;

void setup() {
  fnk.begin(57600, 0, 0);
  fnk.listenTo("wind", lesen);
}

void loop() {

  Serial.println(i);
  fnk.hark();

}

void lesen(char*c)
{
  char * token = fnk.getToken(c);
  i = atoi(fnk.getArgument(c));
}
