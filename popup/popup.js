$( document ).ready(function() {

var spots = ['V4yKSztc_nI','EjgM28VwxFQ','GNkZlOhyXgE','-3uzU2rIIyM','8Jau9_Tl8zQ','g4F5rELvr3U','mmu7l2N7zag','aRPpzOosx2g','wlvyQMnxoeI'];


$('.close').click(function() {
  $('#content').remove();
  $('.popup').fadeOut();
  $(this).parents('.popup').fadeOut();
});

/*$('.popup').click(function() {
  $('#content').remove();
  $('.popup').fadeOut();
  $(this).parents('.popup').fadeOut();
});*/

$('.bg').click(function() {
  $('#content').remove();
  $('.popup').fadeOut();
  $(this).parents('.popup').fadeOut();
});



$('.button_brzuch').click(function(e) {
    bindAction(e,2);
});

$('.button_oczy').click(function(e) {
    bindAction(e,4);
});

$('.button_rece').click(function(e) {
    bindAction(e,0);
});

$('.button_verte').click(function(e) {
    bindAction(e,3);
});

$('.button_nogi').click(function(e) {
    bindAction(e,1);
});

$('.button_usta').click(function(e) {
    bindAction(e,5);
});

$('.button_final').click(function(e) {
    bindAction(e,7);
});

$('.button_frekwencja').click(function(e) {
    bindAction(e,8);
});

$('.button_animacja').click(function(e) {
    bindAction(e,9);
});

function bindAction(e,i) {
    showPopup(e,i);  
     return false;
};

function showPopup(e,i) {
     if (!$('.popup:visible').length) {
            $('.popup').fadeIn();
        }   
        e.preventDefault();
        var filmId = spots[i];
        var player;
        $("#container2").append('<div id="content" class="content"><div id="player" class="player"> </div> <div style="margin-left:90%;background-color:red"><ul><li><a class="btnz share facebook" href="http://www.facebook.com/sharer.php?u=http://strasznienamprzykro.pl/"><i class="fa fa-facebook fa-3x"></i></a></li><li><a class="btnz share twitter" href="http://twitter.com/share?text=%23TAKdlaJOW&url=http://strasznienamprzykro.pl"><i class="fa fa-twitter fa-3x"></i></a></li></ul></div><br><div class="support_popup"><span class="content_font_title"> PODOBA CI SIĘ NASZ PRZEKAZ?</span> <br/><span class="content_font">Wesprzyj produkcję i promocję kolejnych spotów. <br/>Każda złotówka pozwala nam dotrzeć do 10 nowych osób!</span>  <br/><a class="payment_button first" href="https://secure.transferuj.pl/?h=1ccb9836385a40d6b5306f3403d990fc88becf66"><i class="fa fa-arrow-right"></i> wpłać <strong>20 zł</strong></a><a class="payment_button" href="https://secure.transferuj.pl/?h=8e1f5b1ca920529f726a7f43bc3798f6eed3e227"><i class="fa fa-arrow-right"></i> wpłać <strong>50 zł </strong></a><a class="payment_button" href="https://secure.transferuj.pl/?id=15885&opis=Wsparcie%20promocji%20spot%C3%B3w&crc=strasznienamprzykro.pl&md5sum=72f6fcaeb51ff78768d7c1c0135404b7"><i class="fa fa-arrow-right"></i> dowolna</a></div><div class="arrow"><a id="next" href="#" style="font-size:18px" >Następny <br> spot <br><i class="fa fa-forward fa-2x"></i></a></div></div>');           
        $('#next').click(function(e) {
            var nextFilmId = i + 1 < spots.length ? i+1 : 0;
            hideAndShowPopup(e,nextFilmId);
        });
        var h = $(".popup .content").height() * 0.8;
        var w = $(".popup .content").width() * 0.9;
        player = new YT.Player('player', {
          height: h,
          width: w,
          videoId: filmId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      
      function onPlayerReady(event) { }

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
                // insert appropriate modal (or whatever) below
           /* $(".#container2").append('<div class="content"><div id="player" class="player"> </div> <div style="margin-left:90%;background-color:red"><ul><li><a class="btnz share facebook" href="http://www.facebook.com/sharer.php?u=http://strasznienamprzykro.pl/"><i class="fa fa-facebook fa-3x"></i></a></li><li><a class="btnz share twitter" href="http://twitter.com/share?text=%23TAKdlaJOW&url=http://strasznienamprzykro.pl"><i class="fa fa-twitter fa-3x"></i></a></li></ul></div><br><div class="support_popup"><span class="content_font_title"> PODOBA CI SIĘ NASZ PRZEKAZ?</span> <br/><span class="content_font">Wesprzyj produkcję i promocję kolejnych spotów. <br/>Każda złotówka pozwala nam dotrzeć do 10 nowych osób!</span>  <br/><a class="payment_button first" href="#"><i class="fa fa-arrow-right"></i> wpłać <strong>10 zł</strong></a><a class="payment_button" href="#"><i class="fa fa-arrow-right"></i> wpłać <strong>50 zł </strong></a><a class="payment_button" href="#"><i class="fa fa-arrow-right"></i> dowolna</a></div><div class="arrow"><a href="#" style="font-size:18px" >Następny <br> spot<i class="fa fa-forward"></i></a></div></div>');
           */ 
            if (i+1 < spots.length) {
              hideAndShowPopup(e,i+1);
            } else {
              $('#content').remove();           
              $('.popup').fadeOut(); 
              $(document).scrollTop( $("#wsparcie").offset().top );
            }             
        }
      }     
  };

function hideAndShowPopup(e,i) {
      $('#content').remove();
      showPopup(e,i);
} ; 

});