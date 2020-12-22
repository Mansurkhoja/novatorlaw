"use strict";
// just wow
new WOW().init();
var imageRight = document.getElementsByClassName('parallax-img');
// just parallax
new simpleParallax(imageRight, {
    orientation: 'right',
    scale: 1.3
});
$(document).ready(function() {
    //how work
    var window_width = document.body.clientWidth,
        $chart = document.getElementById('chart-nav'),
        init = false;

    if (window_width > 992 && $chart) {
        chart();
    }

    window.addEventListener("orientationchange", function() {
        window_width = document.body.clientWidth;

        if (window_width > 992 && init === true && $chart) {
            chart();
            init = false;
        }

        if (window_width <= 992) {
            init = true;
            $chart.innerHTML = "";
        }
    }, false);
    window.addEventListener("resize", function() {
        window_width = document.body.clientWidth;

        if (window_width > 992 && init === true && $chart) {
            chart();
            init = false;
            $('.chart-popup').removeClass('fadeIn');
            $('.nav-item').removeClass('active');
        }

        if (window_width <= 992) {
            init = true;
            $chart.innerHTML = "";
        }
    }, false);
    $('body').on('click', '.js-open-chart-nav', function() {
        var $this = $(this),
            $popup = $('.chart-popup'),
            img = $this.data('img'),
            text = $this.data('text');

        if (!$this.hasClass('active')) {
            $this.addClass('active').siblings('.nav-item').removeClass('active');
            $popup.find('img').attr('src', img);
            $popup.find('.descr').text(text);
            $popup.addClass('fadeIn');
        }
    });
    $('body').on('click', '.js-close-chart-popup', function() {
        var $popup = $('.chart-popup'),
            $items = $('.chart-nav-responsive');
        $popup.removeClass('fadeIn');
        $items.find('.nav-item').removeClass('active');
    });
    //team-slider
    $('.owl-carousel').owlCarousel({
        margin: 0,
        smartSpeed: 500,
        dots: false,
        responsive: {
            0: {
                stagePadding: 41,
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});