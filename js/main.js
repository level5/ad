function makeItRain () {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}



function toggle() {
    if ($('.nav').hasClass('show')) {
        $('.nav').removeClass('show');
        $('body').removeClass('u-no-scroll');
    } else {
        $('.nav').addClass('show');
        $('body').addClass('u-no-scroll');
    }
}

function hashChange(hash) {
    $('.tab').removeClass('show');
    console.log(location.hash)
    switch (hash) {
        case '#about-us':
            $('.tab.about-us').addClass('show');
            break;
        case '#our-vision':
            $('.tab.our-vision').addClass('show');
            break;
        case '#register':
            $('.tab.register').addClass('show');
            break;
        case '#current-state':
            $('.tab.current-state').addClass('show');
            break;
    }
}

$(document).ready(() => {

    makeItRain();

    hashChange(location.hash);

    $('.nav-btn').click(() => {
        if (location.hash == null || location.hash.length == 0) {
            return;
        }
        toggle();
    });

    // hash change
    $('.nav__item').click((e) => {
        var path = $(e.currentTarget).attr('x-href');
        history.pushState(null, null, path);
        toggle();
        hashChange(location.hash);
    });


    $('.nav__item-nest').hover(() => {
    }, (e) => {
        $(e.currentTarget).scrollTop(0);
    });

    window.addEventListener('hashchange', () => console.log(location.hash), false);

});