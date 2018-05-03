
$(document).ready(function() {
  var name = 'Oikawa Tooru';
  var user = '@theGreatKing'
   var tweetText = $('#textarea')
   var tweetBtn = $('#btn');
   var box = $('#tweet-box');
   var LIMIT = 144;
   tweetText.focus();
   $('#char').text(LIMIT);

   tweetText.on('keydown', function(event) {
    // cambié el value() por text() por que cambié el textarea por p con contenteditable="true"
    var numCharTweet = tweetText.text().length;
    var charLimit = LIMIT - numCharTweet;
    charLimit <= 20 ? $('#char').addClass('blue'): $('#char').removeClass('blue');
    charLimit <= 10 ? $('#char').addClass('red'): $('#char').removeClass('red');
    charLimit <= 0 ? tweetBtn.attr("disabled", true) : tweetBtn.attr("disabled", false);
    // tweetBtn.attr("disabled", true) ? tweetBtn.addClass('active-btn'): tweetBtn.removeClass('active-btn');
    $('#char').text(charLimit);
   });

   tweetBtn.on('click',function(event) {
       if(tweetText.text()!= 0) {
        var myDate = new Date();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        // pasar estas condicionales a ternarios
        if(hours< 10) {
          hours = '0' + hours;  
        }
        if(minutes < 10) {
         minutes = '0' + minutes;  
       }
        var getMyDate = hours + ':' + minutes; 
        var div = $('<div class="pd-2 myTeewt"><figure class="icon-tweet"><img class="rounded-circle " src="https://78.media.tumblr.com/aa484e9dad8c86c89639331c2d84eccb/tumblr_o79do1B2Jx1udv4k1o1_250.png" alt=""> </figure> <div class="text-tweet"> <div class="cross gray-icon"><i class="fas fa-times"></i></div> <ul class="data-tweet"> <li class="name">'+ name +'</li><li class="fs-0-9">'+ user +'</li><li class="fs-0-9">'+ getMyDate+ '</li></ul><div class="tweet">' + tweetText.text() + '</div></div> </div>');

        box.prepend(div);
        tweetText.text('');
        $('#char').text('144');
        $('#char').removeClass('blue red');
        tweetText.focus()
       } 
   })
})