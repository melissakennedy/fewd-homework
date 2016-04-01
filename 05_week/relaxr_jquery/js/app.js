$(document).ready(function() {


$(".readmore").click(showAdditionalText)

function showAdditionalText(){
  console.log(this)
  $("#show-this-on-click").slideDown()
  $(this).hide()
  $(".readless").show()
  event.preventDefault()
}


$(".readless").click(hideAdditionalText)

function hideAdditionalText(){
  $("#show-this-on-click").hide()
  $(".readmore").show()
  $(".readless").hide()
  event.preventDefault()
}


});
