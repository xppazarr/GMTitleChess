// ==UserScript==
// @name         Add GM Tag to Usernames
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Adds a GM tag to you
// @author       Solar & discord sola.r & https://www.chess.com/member/solarmt
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

             // Apply styling to make the GM tag bigger
        gmTag.style.fontSize = '13px'; // Adjust as needed

            // Insert the GM tag element as the first child of the user tagline component
            userTaglineComponent.insertBefore(gmTag, userTaglineComponent.firstChild);
        }
    }

    // Find the profile card user block
    var profileCardUserBlock = document.querySelector('div.profile-card-user-block');

    if (profileCardUserBlock) {
        // Create the GM tag element
        var gmTagProfile = document.createElement('a');
        gmTagProfile.setAttribute('class', 'profile-card-chesstitle');
        gmTagProfile.setAttribute('href', 'https://www.chess.com/members/titled-players');
        gmTagProfile.setAttribute('v-tooltip', 'Grandmaster');
        gmTagProfile.setAttribute('data-tooltip-target', '0');
        gmTagProfile.textContent = 'GM';

        // Insert the GM tag element as the first child of the profile card user block
        profileCardUserBlock.insertBefore(gmTagProfile, profileCardUserBlock.firstChild);
    }

    // Find the home user avatar
    var homeUserAvatar = document.querySelector('.home-user-avatar');

    if (homeUserAvatar) {
        // Create the GM tag element
        var gmTagHome = document.createElement('a');
        gmTagHome.setAttribute('class', 'user-chess-title-component');
        gmTagHome.setAttribute('href', 'https://www.chess.com/members/titled-players');
        gmTagHome.setAttribute('v-tooltip', 'Grandmaster');
        gmTagHome.setAttribute('data-tooltip-target', '12');
        gmTagHome.textContent = 'GM';

         // Apply styling to make the GM tag bigger
        gmTagHome.style.fontSize = '15px'; // Adjust as needed

        // Insert the GM tag element after the home user avatar
        homeUserAvatar.parentNode.insertBefore(gmTagHome, homeUserAvatar.nextSibling);
    }
})();
