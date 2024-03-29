// ==UserScript==
// @name         Add GM Tag to YOUR username.
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Adds a GM tag to you / Works on computer games aswell.
// @author       Solar / discord sola.r & https://www.chess.com/member/solarmt
// @include      https://www.chess.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Find the player bottom element
    var playerBottom = document.querySelector('div#player-bottom[data-v-app=""]') || document.querySelector('div.player-component.player-bottom');

    if (playerBottom) {
        // Find the user tagline component within player bottom
        var userTaglineComponent = playerBottom.querySelector('div.user-tagline-component');

        if (userTaglineComponent) {
            // Create the GM tag element
            var gmTag = document.createElement('a');
            gmTag.setAttribute('class', 'user-chess-title-component');
            gmTag.setAttribute('href', '/members/titled-players');
            gmTag.setAttribute('target', '_blank');
            gmTag.setAttribute('data-tooltip-target', '12');
            gmTag.textContent = 'GM';

            // Insert the GM tag element as the first child of the user tagline component
            userTaglineComponent.insertBefore(gmTag, userTaglineComponent.firstChild);
        }
    }
})();


// If