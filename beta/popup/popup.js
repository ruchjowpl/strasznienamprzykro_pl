$(function() {
    $('.button_oczy').click(function(e) {
        //jeżeli popup nie jest widoczny to go pokaż
        if (!$('.popup:visible').length) {
            $('.popup').fadeIn();
        }
        e.preventDefault();
        return false;
    });
 
    //zdarzenie zamknięcia podpinamy pod przycisk close i pod tło popupa
    $('.popup .close, .popup .bg').click(function() {
        $(this).parents('.popup').fadeOut();
    });
})