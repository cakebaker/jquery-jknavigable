/* Licensed under the MIT license by Daniel Hofstetter (http://cakebaker.42dh.com) */
(function($) {
    $.fn.jknavigable = function(options) {
        var J_KEY = 106, K_KEY = 107;
        var settings = { 'activeClass': 'active' }
        var elements = this;
        var currentElementIndex = null;
        var previousElementIndex = null;

        if (options) {
            $.extend(settings, options);
        }

        $(document).keypress(function(event) {
            var pressed_key = event.which;

            switch(pressed_key) {
                case J_KEY:
                            if (currentElementIndex == null) {
                                currentElementIndex = 0;
                            } else if (!(currentElementIndex == elements.length - 1)) {
                                previousElementIndex = currentElementIndex;
                                currentElementIndex++;
                            }
                            break;
                case K_KEY:
                            if (currentElementIndex == null) {
                                return;
                            } else if (!(currentElementIndex == 0)) {
                                previousElementIndex = currentElementIndex;
                                currentElementIndex--;
                            }
                            break;
                default: return;
            }

            var currentElement = elements.eq(currentElementIndex);
            currentElement.addClass(settings['activeClass']);

            if (previousElementIndex != null) {
                var previousElement = elements.eq(previousElementIndex);
                previousElement.removeClass(settings['activeClass']);
            }

            var position = currentElement.offset().top;
            $(document).scrollTop(position);
        });

        return this;
    }
})(jQuery);
