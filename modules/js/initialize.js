(function ($) {

    Drupal.behaviors.myModuleBehavior = {
        attach: function (context, settings) {
            var audio_element = $('.audiojs-global', context);
            var a = audiojs.createAll({
                trackEnded: function() {
                  $('.audiojs-global-link.playing', context).removeClass('playing');
                }
            }, audio_element);

            // TODO: Add next.
            var audio = a[0];
            var now_playing = $('.now-playing', context);
            $('.audiojs-global-link', context).click(function(e) {
                e.preventDefault();
                if ($(this).hasClass('playing')) {
                    audio.pause();
                    $(this).removeClass('playing');
                }
                else {
                    $('.audiojs-global-link', context).removeClass('playing');
                    $(this).addClass('playing');
                    audio.load($(this).attr('data-source'));
                    audio.play();
                    now_playing.text($(this).text());
                }
            });
        }
    };

}(jQuery));
