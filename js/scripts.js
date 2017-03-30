




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    console.log(userInput);
  });
});
