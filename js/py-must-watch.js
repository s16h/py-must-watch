var dismiss = '[data-dismiss="jumbotron"]'
var Jumbotron = function(el) {
	$(el).on('click', dismiss, this.hide);
}

Jumbotron.prototype.hide = function(e) {
    var $this = $(this);
    var $parent = $this.parent();

    if (e) {
    	e.preventDefault();
    }

    if (!$parent.length) {
      $parent = $this.closest('.video-player-container');
    }

    $parent.hide(250);

    if (player) {
    	player.stopVideo();
    }

    if (e.isDefaultPrevented()) {
    	return;
    }
}

Jumbotron.prototype.show = function() {
    $el = $('#video-player-container');
    $('html, body').animate({
	    scrollTop: "0px"
	}, 500);
    $el.show(250);
}