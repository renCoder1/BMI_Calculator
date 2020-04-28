//jshint esversion:6

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

//Listen to post 3000

app.listen('3000', function() {
  console.log("Listening at port 3000");
});

//get
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});


//post
app.post('/', function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = Math.floor((weight / (height * height)));
  var note1 = "\n" + "NOTE:" + "\n" + "BMI applies to most adults of 18 - 65 years.";
  var note2 = "\n" + "BMI is not used for muscle builders, long distance athletes, pregnant women," + "\n"+ "the elderly or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat, just the number."+"\n"+"Those with a higher muscle mass, such as athletes, may have a high BMI but not be at greater health risk. Those with a lower muscle mass, such as children who have not completed their growth or the elderly who may be losing some muscle mass may have a lower BMI. During pregnancy and lactation,"+"\n"+"a woman's body composition changes, so using BMI is not appropriate.";
  if (bmi >= 18.5 && bmi <= 25) {
    res.send("Calculated BMI is :: " + bmi + " You are a healthy individual! 👍" + '\n'+ note1 + note2);
res.write('hello'+'</br>'+'bye');
  }
  if (bmi < 18.5 && bmi > 1) {
    res.send("Calculated BMI is :: " + bmi + " \n You have very low body mass! 👎" + note1 + note2);
  }
  if (bmi > 25) {
    res.send("Calculated BMI is :: " + bmi + " \n You are overweight! 🧐" + note1 + note2);
  }
  if(bmi <= 1){
    res.send("❌ You entered either weight or height in wrong unit or something went wrogn!");
  }

});
