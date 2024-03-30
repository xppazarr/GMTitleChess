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

    console.log("Script started.");

    var playerBottom = document.querySelector('div#player-bottom[data-v-app=""]') || document.querySelector('div.player-component.player-bottom');

    if (playerBottom) {
        var userTaglineComponent = playerBottom.querySelector('div.user-tagline-component');

        if (userTaglineComponent) {
            console.log("User tagline component found.");

            var gmTag = document.createElement('a');
            gmTag.setAttribute('class', 'user-chess-title-component');
            gmTag.setAttribute('href', '/members/titled-players');
            gmTag.setAttribute('target', '_blank');
            gmTag.setAttribute('data-tooltip-target', '12');
            gmTag.textContent = 'GM';
            gmTag.style.fontSize = '13px'; // Adjust as needed
            userTaglineComponent.insertBefore(gmTag, userTaglineComponent.firstChild);
            console.log("GM tag added to user tagline component.");
        }
    }

    var homeUserAvatar = document.querySelector('.home-user-avatar');

    if (homeUserAvatar) {
        console.log("Home user avatar found.");

        var gmTagHome = document.createElement('a');
        gmTagHome.setAttribute('class', 'user-chess-title-component');
        gmTagHome.setAttribute('href', 'https://www.chess.com/members/titled-players');
        gmTagHome.setAttribute('v-tooltip', 'Grandmaster');
        gmTagHome.setAttribute('data-tooltip-target', '12');
        gmTagHome.textContent = 'GM';
        gmTagHome.style.fontSize = '15px'; // Adjust as needed
        homeUserAvatar.parentNode.insertBefore(gmTagHome, homeUserAvatar.nextSibling);
        console.log("GM tag added to home user avatar.");
    }

    var editContainerProfileEdit = document.querySelector('.edit-container.profile-edit');

    if (editContainerProfileEdit) {
        console.log("Edit container profile edit found.");

        var profileCardUserBlock = document.querySelector('div.profile-card-user-block');

        if (profileCardUserBlock) {
            console.log("Profile card user block found.");

            var gmTagProfile = document.createElement('a');
            gmTagProfile.setAttribute('class', 'profile-card-chesstitle');
            gmTagProfile.setAttribute('href', 'https://www.chess.com/members/titled-players');
            gmTagProfile.setAttribute('v-tooltip', 'Grandmaster');
            gmTagProfile.setAttribute('data-tooltip-target', '0');
            gmTagProfile.textContent = 'GM';
            profileCardUserBlock.insertBefore(gmTagProfile, profileCardUserBlock.firstChild);
            console.log("GM tag added to profile card user block.");
        }

        var v5SectionContentWide = document.querySelector('.v5-section-content-wide');

        if (v5SectionContentWide) {
            console.log("v5 section content wide found.");

            var titledPlayerDiv = document.createElement('div');
            titledPlayerDiv.setAttribute('class', 'status-component status-titled');

            titledPlayerDiv.innerHTML = `
                <span class="icon-font-chess status-membership-icon chess-crown"></span>
                <div class="status-label-group">
                    <span class="status-label">Titled Player</span>
                </div>
                <div class="status-data-wrapper">
                    <a href="https://www.chess.com/members/titled-players" class="status-data status-stream-url" rel="nofollow">
                        Grandmaster
                    </a>
                </div>
            `;

            v5SectionContentWide.parentNode.insertBefore(titledPlayerDiv, v5SectionContentWide.nextSibling);
            console.log("Titled player div added.");
        }

        setTimeout(function() {
            var archiveLinks = document.querySelectorAll('a.v5-header-link.v5-x-wide[href^="/games/archive/"]');

            console.log("Number of archive links found: " + archiveLinks.length);

            archiveLinks.forEach(function(link) {
                console.log("Processing archive link.");

                var match = link.getAttribute('href').match(/\/games\/archive\/([^\/]+)/);

                if (match && match.length > 1) {
                    var username = match[1];
                    addGmTagToMemberLinks(username);
                }
            });
        }, 1000);
    }


    function addGmTagToMemberLinks(username) {
        console.log("Adding GM tag to member links for username: " + username);


        var memberLinks = document.querySelectorAll('a[href="/member/' + username + '"]');

        console.log("Number of member links found: " + memberLinks.length);

        memberLinks.forEach(function(memberLink) {
            console.log("Processing member link.");


            var gmSpan = document.createElement('span');
            gmSpan.setAttribute('class', 'user-chess-title-component');
            gmSpan.setAttribute('data-tooltip-target', '26');
            gmSpan.textContent = 'GM';

            memberLink.parentNode.insertBefore(gmSpan, memberLink);
            console.log("GM tag added to member link.");
        });
    }

})();
