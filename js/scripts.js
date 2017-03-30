var romanConverter = function (number) {
 var converted = "";
 var romanNumber = [1000, 500, 100, 50, 10, 5, 1];
 var romanLetter = ["M", "D", "C", "L", "X", "V", "I"];
 if((number > 3999) || (number < 1))
 {
   alert("Please enter a number between 1 - 4000");
 }

 for (var index=0;index<romanNumber.length;index ++)
 {
  //  if(romanNumber[index] === number)
  //  {
  //    console.log(romanLetter[index]);
  //  }
   var quotient = Math.floor(number / romanNumber[index]);
   var remainder = number % romanNumber[index];
   for (var j=0; j<quotient && quotient>0 ;j++ )
   {
     converted += romanLetter[index];
    //  console.log(romanLetter[index]);
   }
   number = remainder;
 }
 console.log(converted);
}




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var result = romanConverter(userInput);
    console.log(result);
  });
});
