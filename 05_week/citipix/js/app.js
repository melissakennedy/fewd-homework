
$( document ).ready(function() {

  $('#submit-btn').click(function(){
    event.preventDefault();

    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();


    if (city == 'new york' || city == 'new york city' || city == 'nyc') {
      $('body').attr('class','nyc');
    }

    if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
      $('body').attr('class','sf');

    }

    if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }

    if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }

    if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sf');
    }
});
});
