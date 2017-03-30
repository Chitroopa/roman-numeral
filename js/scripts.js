var romanConverter = function (number) {
 if((number > 3999) || (number < 1))
 {
   alert("Please enter a number between 1 - 4000");
 }
 

}




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var result = romanConverter(userInput);
    console.log(userInput);
  });
});
