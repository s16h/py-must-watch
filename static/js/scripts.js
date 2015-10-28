$(document).ready(function() {
    initEventHandlers();
});

/**
 * Setup all the custom event handling of buttons etc. required.
 */
function initEventHandlers() {
    // The close button of the video player container
    $('#video-player-container-dismiss').click(function() {
        $('#video-player-container').addClass('hide');
        if (player) {
            player.stopVideo();
        }
    });
}

/**
 * Returns what the height of the YouTube player container should be,
 * given its current width.
 *
 * By default, a 16:9 aspect ratio is used.
 */
function calculatePlayerHeight(aspectRatio) {
    if (!aspectRatio) {
        aspectRatio = 9.0 / 16.0;
    }
    var playerWidth = $('.container.video-player-container').width();
    var playerHeight = playerWidth * aspectRatio;
    return playerHeight;
}

$(window).resize(function() {
    var newPlayerHeight = calculatePlayerHeight();
    if (player) {
        player.setSize('100%', newPlayerHeight);
    }
});