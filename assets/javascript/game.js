$( document ).ready(function(){
    var computerGuess = Math.floor((Math.random()*101)+19);
    $(".actualRandomNumber").text(computerGuess);
    console.log(computerGuess)

    var wins = 0;
    $(".wins").text("Wins: " + wins);
    var losses = 0;
    $(".losses").text("Losses: " + losses);

    function reset() {
      computerGuess = Math.floor((Math.random()*101)+19);
      $(".actualRandomNumber").text(computerGuess);
      blueStone = Math.floor((Math.random()*11)+1);
      yellowStone = Math.floor((Math.random()*11)+1);
      redStone = Math.floor((Math.random()*11)+1);
      purpleStone = Math.floor((Math.random()*11)+1);
      greenStone = Math.floor((Math.random()*11)+1);
      orangeStone = Math.floor((Math.random()*11)+1);
      totalScore = 0;
      $(".totalScore").text("Your total score is: " + totalScore);
      
    }

    var totalScore = 0;
    var blueStone = Math.floor((Math.random()*11)+1);
    $("#blue").on("click", function() {
        totalScore = totalScore + blueStone;
        $(".totalScore").text("Your total score is: " + totalScore);
        if (totalScore === computerGuess){
          alert("GOOD JOB");
          wins++;
          $(".wins").text("Wins: " + wins);
          reset();
        }
        else if ( totalScore > computerGuess){
          alert("LOSER");
          losses += 1;
          $(".losses").text("Losses: " + losses);
          reset();
        } 
        console.log(losses);
        console.log("New totalScore= " + totalScore);
      });
    var yellowStone = Math.floor((Math.random()*11)+1);
    console.log(yellowStone);
    $("#yellow").on("click", function() {
      totalScore = totalScore + yellowStone;
      $(".totalScore").text("Your total score is: " + totalScore);
      if (totalScore === computerGuess){
        alert("GOOD JOB");
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
      }
      else if ( totalScore > computerGuess){
        alert("LOSER");
        losses += 1;
        $(".losses").text("Losses: " + losses);
        reset();
      } 

      console.log("New totalScore= " + totalScore);
      });
    var redStone = Math.floor((Math.random()*11)+1);
    $("#red").on("click", function() {
      totalScore = totalScore + redStone;
      $(".totalScore").text("Your total score is: " + totalScore);
      if (totalScore === computerGuess){
        alert("GOOD JOB");
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
      }
      else if ( totalScore > computerGuess){
        alert("LOSER");
        losses += 1;
        $(".losses").text("Losses: " + losses);
        reset();
      } 
      });
    var purpleStone = Math.floor((Math.random()*11)+1);
    $("#purple").on("click", function() {
      totalScore = totalScore + purpleStone;
      $(".totalScore").text("Your total score is: " + totalScore);
      if (totalScore === computerGuess){
        alert("GOOD JOB");
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
      }
      else if ( totalScore > computerGuess){
        alert("LOSER");
        losses += 1;
        $(".losses").text("Losses: " + losses);
        reset();
      } 
      });
    var greenStone = Math.floor((Math.random()*11)+1);
    $("#green").on("click", function() {
      totalScore = totalScore + greenStone;
      $(".totalScore").text("Your total score is: " + totalScore);
      if (totalScore === computerGuess){
        alert("GOOD JOB");
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
      }
      else if ( totalScore > computerGuess){
        alert("LOSER");
        losses += 1;
        $(".losses").text("Losses: " + losses);
        reset();
      } 
      });
    var orangeStone = Math.floor((Math.random()*11)+1);
    $("#orange").on("click", function() {
      totalScore = totalScore + orangeStone;
      $(".totalScore").text("Your total score is: " + totalScore);
      if (totalScore === computerGuess){
        alert("GOOD JOB");
        wins++;
        $(".wins").text("Wins: " + wins);
        reset();
      }
      else if ( totalScore > computerGuess){
        alert("LOSER");
        losses += 1;
        $(".losses").text("Losses: " + losses);
        reset();
      } 
      });








})