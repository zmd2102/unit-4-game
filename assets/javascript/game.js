$( document ).ready(function(){
    var computerGuess = Math.floor((Math.random()*101)+19);
    $(".actualRandomNumber").text(computerGuess);
    console.log(computerGuess)

    var wins = 0;
    $(".wins").text("Wins: " + wins);
    var losses = 0;
    $(".losses").text("Losses: " + losses);

    $("#blue").on("click", function() {
        Math.floor(Math.random()*11+1);
      });
    $("#yellow").on("click", function() {
        Math.floor(Math.random()*11+1);
      });
    $("#red").on("click", function() {
        Math.floor(Math.random()*11+1);
      });
    $("#purple").on("click", function() {
        Math.floor(Math.random()*11+1);
      });
    $("#green").on("click", function() {
        Math.floor(Math.random()*11+1);
      });
    $("#orange").on("click", function() {
        Math.floor(Math.random()*11+1);
      });

    var totalScore = 0;









})