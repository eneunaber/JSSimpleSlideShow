/*
* SimpleSlideshow - A JavaScript slideshow application based on jQuery
*
* http://XXXXX
*
* Copyright (c) 2011 Eric Neunaber
* Licensed under the MIT (MIT.License.txt).
*/

(function (jQuery, win) {
    function SlideShow() {
        var _ssName = "ul.slideShow";
        var _liName = _ssName + "> li";
        var _duration = 1000;
        var _imagePos = 0;
        var _self = this;

        this.isReady = function () {
            return $(_ssName).length == 1;
        };

        this.imageCount = function () {
            if (this.isReady()) {
                return $(_liName).length;
            }
            return false;
        };

        this.setDuration = function (duration) {
            if (duration >= 0) {
                _duration = duration;
            }
        };

        this.begin = function () {
            if (this.isReady()) {
                var images = $(_liName);

                $(images[0]).css("display", "list-item");

                for (var count = 1; count < (images.length); count++) {
                    $(images[count]).css("display", "none");
                }

                setInterval(this.switchImage, 5000);
            }
        };

        this.switchImage = function () {
            if (_self.isReady()) {
                var images = $(_liName);
                $(images[_imagePos]).fadeOut(_duration);
                _imagePos = ((_imagePos + 1) == _self.imageCount()) ? 0 : _imagePos + 1;
                $(images[_imagePos]).fadeIn(_duration);
            }
        };

    };


    win.SimpleSlideShow = new SlideShow();
    win.ResetSimpleSlideShow = function () {
        win.SimpleSlideShow = new SlideShow();
    }
})(jQuery, window);
