var romanConverter = function (number) {
 var romanNumber = [1,5,10,50,100,500,1000];
 var romanLetter = ["I","V","X","L","C","D","M"];
 if((number > 3999) || (number < 1))
 {
   alert("Please enter a number between 1 - 4000");
 }

 for (var index=0;index<romanNumber.length;index ++)
 {
   if(romanNumber[index] === number)
   {
     console.log(romanLetter[index]);
   }
 }

}




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var result = romanConverter(userInput);
  });
});
