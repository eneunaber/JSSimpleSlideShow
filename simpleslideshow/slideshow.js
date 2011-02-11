function SimpleSlideShow() {
    this._ssName = "ul.slideShow";
    this._liName = this._ssName + "> li";
    this._duration = 1000;
    this._imagePos = 0;
}

SimpleSlideShow.prototype = {
    isReady: function () {
        return jQuery(this._ssName).length == 1;
    },

    imageCount: function () {
        if (this.isReady()) {
            return jQuery(this._liName).length;
        }
        return false;
    },

    setDuration: function (duration) {
        if (duration >= 0) {
            this._duration = duration;
        }
    },

    begin: function () {
        if (this.isReady()) {
            var images = jQuery(this._liName);

            jQuery(images[0]).css("display", "list-item");

            for (var count = 1; count < (images.length); count++) {
                jQuery(images[count]).css("display", "none");
            }

            setInterval(this.switchImage, 5000);
        }
    },

    switchImage: function () {
        var _self = this;
        if (_self.isReady.call(_self)) {
            var images = jQuery(_self._liName);
            jQuery(images[_self._imagePos]).fadeOut(_self._duration);
            _self._imagePos = ((_self._imagePos + 1) == _self.imageCount.call(_self)) ? 0 : _self._imagePos + 1;
            jQuery(images[_self._imagePos]).fadeIn(_self._duration);
        }
    }

};

/*

jQuery(function () {
var slideShow = new SimpleSlideShow();
slideShow.begin();
});

*/

