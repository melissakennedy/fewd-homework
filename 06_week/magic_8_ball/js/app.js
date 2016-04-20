// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Outlook good."]
  var colors = ["red", "blue", "yellow", "green", "orange", "black", "cyan", "magenta"]

  function buttonClicked(){
    var question = $('#question').val()
    var randomNumber = Math.floor(Math.random() * answers.length)
    var eightBallResponse = answers [randomNumber]
    $('#output').text("Magic 8 Ball says:" + " " + eightBallResponse)
    }


    $('#submit').click(buttonClicked)


    $('#submit').click(function(e) {
        e.preventDefault();
        var rVal = Math.floor(Math.random() * 256)
        var gVal = Math.floor(Math.random() * 256)
        var bVal = Math.floor(Math.random() * 256)
        rVal = rVal.toString();
        gVal = gVal.toString();
        bVal = bVal.toString();
        var randomColor = 'rgb(' + rVal + ',' + gVal + ',' + bVal + ')'

        $('body').css('background-color',randomColor);
    })

});
