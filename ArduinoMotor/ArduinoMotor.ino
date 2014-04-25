int motor1 = 3;
int switch1 = 2;
int flag = 0;

void setup() {                
  pinMode(motor1, OUTPUT);
  pinMode(switch1, INPUT);
  Serial.begin(9600);  
}

void loop() {
  if (digitalRead(switch1) == HIGH && flag == 0) {
     digitalWrite(motor1, HIGH);   
     delay(2000);
     Serial.println(digitalRead(switch1));
     flag = 1;
   } 
  else if(digitalRead(switch1) == HIGH && flag == 1){
      digitalWrite(motor1, LOW);
   } 
  else {
    digitalWrite(motor1, LOW);   
    flag = 0;
    Serial.println(digitalRead(switch1));
  } 
}
