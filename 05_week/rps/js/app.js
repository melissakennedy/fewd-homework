// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  var computerWeapon = "rock"

  function choseRock(){
    console.log("You chose rock")
    if (computerWeapon == "rock"){
      alert("It's a tie!")
    }
    else if(computerWeapon == "scissors"){
      alert("You win!")
    }
    else if(computerWeapon == "paper"){
      alert("You lose!")
    }
    else{
      alert ("Oops, something went wrong. It's not a win/loss/or tie")
    }
  }

  function chosePaper(){
    console.log("You chose paper")
    if(computerWeapon == "paper"){
       alert("It's a tie!")
    }
   else if(computerWeapon == "scissors"){
      alert("You lose!")
    }
    else if(computerWeapon == "rock"){
       alert("You win!")
     }
    }


  function choseScissors(){
    console.log("You chose scissors")
    if (computerWeapon == "scissors"){
       alert("It's a tie")
     }

   else if(computerWeapon == "rock"){
      alert("You lose")
    }
   else if(computerWeapon == "paper"){
      alert("You win!")
  }
}

  $("#rock").click (choseRock)
  $("#paper").click (chosePaper)
  $("#scissors").click (choseScissors)

});
