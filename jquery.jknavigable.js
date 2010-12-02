/* Licensed under the MIT license by Daniel Hofstetter (http://cakebaker.42dh.com) */
(function($) {
    $.fn.jknavigable = function() {
        var J_KEY = 106, K_KEY = 107;
        var elements = this;
        var currentElementIndex = null;

        $(document).keypress(function(event) {
            var pressed_key = event.which;

            switch(pressed_key) {
                case J_KEY:
                            if (currentElementIndex == null) {
                                currentElementIndex = 0;
                            } else if (!(currentElementIndex == elements.length - 1)) {
                                currentElementIndex++;
                            }
                            break;
                case K_KEY:
                            if (currentElementIndex == null) {
                                return;
                            } else if (!(currentElementIndex == 0)) {
                                currentElementIndex--;
                            }
                            break;
                default: return;
            }

            var currentElement = elements.eq(currentElementIndex);
            var position = currentElement.offset().top;

            $(document).scrollTop(position);
        });

        return this;
    }
})(jQuery);
