(function ($) {

    Drupal.behaviors.myModuleBehavior = {
        attach: function (context, settings) {
            var audio_element = $('.audiojs-global');
            var a = audiojs.createAll({
                trackEnded: function() {
                  $('.audiojs-global-link.playing').removeClass('playing');
                }
            }, audio_element);

            // TODO: Add next.
            var audio = a[0];
            var now_playing = $('.now-playing');
            $('.audiojs-global-link').click(function(e) {
                e.preventDefault();
                if ($(this).hasClass('playing')) {
                    audio.pause();
                    $(this).removeClass('playing');
                }
                else {
                    $('.audiojs-global-link').removeClass('playing');
                    $(this).addClass('playing');
                    audio.load($(this).attr('data-source'));
                    audio.play();
                    now_playing.text($(this).text());
                }
            });
        }
    };

}(jQuery));
