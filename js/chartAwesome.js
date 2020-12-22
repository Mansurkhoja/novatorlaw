function chart() {
    function vw_to_px(number) {
        var total = document.documentElement.clientWidth / 100 * number;
        return total;
    }
    APP = {}, APP.Controls = {}, APP.Controls.Page = {}, APP.Controls.Partial = {}, APP.Helper = {},
        function (e, t, i) {
            window.requestAnimFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
                    window.setTimeout(e, 1e3 / 60)
                }
            }(), t.Helper.AnimateWave = function (t) {
                var i = void 0 != t.windowWidth ? t.windowWidth : window.innerWidth,
                    n = void 0 != t.windowHeight ? t.windowHeight * 1.6 : window.innerHeight * 1.6,
                    o = void 0 != t.mouseX ? t.mouseX - (vw_to_px(3.64583) / 2) : 0,
                    r = void 0 != t.mouseY ? t.mouseY : 0,
                    s = void 0 != t.navTop ? t.navTop : 0,
                    a = void 0 != t.navWidth ? t.navWidth : 0,
                    l = t.elements,
                    c = void 0 != t.elementsCount ? t.elementsCount : l.length,
                    d = void 0 != t.scrollLeft ? t.scrollLeft : 0,
                    u = void 0 != t.waveHeight ? t.waveHeight : 50,
                    h = n / 4,
                    p = r - s,
                    f = 0;

                f = i > a ? o - .5 * (i - a) : d + o;
                var m = 0;
                Math.abs(p) < h && (m = p > h / 2 ? h - p : p > 0 ? p / 2 + h / 4 : p < -h / 2 ? -p - h : p / 2 - h / 4), m = m * u * 2 / h;
                var v = a / c;
                l.each(function (t, i) {
                    var n = e(i),
                        o = t * v,
                        r = Math.abs(f - o);
                    r > 300 && (r = 300);
                    var s = m * (300 - r) / 300,
                        a = s * Math.cos(.025 * r);
                    n.css("transform", "translateY(" + a + "px)")
                })

            }
        }(jQuery, window.APP),
        function (e, t) {
            "use strict";
            t.Controls.Partial.MainSlider = can.Control.extend({
                defaults: {
                    mainSlider: ".js-main-slider",
                    slide: ".slide",
                    sliderNav: ".js-main-slider-nav",
                    navItem: ".nav-item",
                    scrollable_section: ".how-work__item"
                }
            }, {
                init: function () {
                    1 != this.inited && (this.inited = !0, this.$body = e("body"), this.mouseX = 0, this.mouseY = 0, this.$mainSlider = this.element.find(this.options.mainSlider), this.$slides = this.$mainSlider.find(this.options.slide), this.$sliderNav = this.element.find(this.options.sliderNav), this.getSizes(), this.generateNav())
                },
                "{scrollable_section} mousemove": function (e, t) {
                    this.mouseX = t.pageX, this.mouseY = t.pageY, (this.animationMouseX = this.mouseX, this.animationMouseY = this.mouseY)
                },
                getSizes: function () {
                    this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.sliderNavWidth = this.$sliderNav.width(), this.sliderNavTop = this.$sliderNav.offset().top
                },
                generateNav: function () {
                    var t = "",
                        i = 0;
                    this.$slides.each(function (n, o) {
                        var r = e(o),
                            s = void 0 != r.data("section-item"),
                            a = r.data("section"),
                            l = r.data("img") || !1,
                            text = r.data("text"),
                            direction = r.data("direction"),
                            c = "nav-item";
                        s && (c += " section", i += 2e3);
                        for (var d = "", u = 0; u < 10; u++) d += '<span class="line"></span>';
                        d += '<div data-direction="' + direction + '" data-img="' + l + '" data-text="' + text + '" class="' + c + '" data-section="' + a + '" data-section-item="' + s + '">', s && (d += '<div class="item-title">' + a + "</div>"), d += "</div>", t += d
                    }.bind(this)), this.$sliderNav.append(t), this.$sliderNavItems = this.$sliderNav.find(this.options.navItem), this.$waveElements = this.$sliderNav.find(".line, " + this.options.navItem), this.waveElementsCount = this.$waveElements.length, this.animateWaveLoop()
                },
                animateWaveLoop: function () {
                    t.Helper.AnimateWave({
                        windowWidth: this.windowWidth,
                        windowHeight: this.windowHeight,
                        mouseX: this.animationMouseX,
                        mouseY: this.animationMouseY,
                        navTop: this.sliderNavTop,
                        navWidth: this.sliderNavWidth,
                        elements: this.$waveElements,
                        elementsCount: this.waveElementsCount
                    }), requestAnimFrame(function () {
                        this.animateWaveLoop()
                    }.bind(this))
                }
            })
        }(jQuery, window.APP),
        function (e, t) {
            "use strict";
            t.Controls.Application = can.Control.extend({
                init: function () {
                    new t.Controls.Partial.MainSlider(this.element)
                }
            }), e(function () {
                new t.Controls.Application(e("body"));
                function _toConsumableArray(arr) {
                    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
                }

                function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }

                function _iterableToArray(iter) {
                    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
                }

                function _arrayWithoutHoles(arr) {
                    if (Array.isArray(arr)) {
                        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                            arr2[i] = arr[i];
                        }
                        return arr2;
                    }
                }
                _toConsumableArray(document.querySelectorAll('.nav-item.section')).forEach(function (link) {
                    return new HoverImgFx4(link);
                });
            })
        }(jQuery, window.APP);
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return {
            x: posx,
            y: posy
        }
    }

    class HoverImgFx4 {
        constructor(el) {
            this.DOM = {
                el: el
            };
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div><div class="hover-reveal__text">${this.DOM.el.dataset.text}</div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left: document.body.scrollLeft + document.documentElement.scrollLeft,
                    top: document.body.scrollTop + document.documentElement.scrollTop
                };
                const itemOffset = {
                    left: this.DOM.reveal.parentElement.getBoundingClientRect().x,
                    top: this.DOM.reveal.parentElement.getBoundingClientRect().y
                };

                this.DOM.reveal.style.top = `${mousePos.y - docScrolls.top - itemOffset.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x - docScrolls.left - itemOffset.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            
        }
        showImage() {
            this.DOM.reveal.className = 'hover-reveal active';
            this.DOM.reveal.parentElement.className = 'nav-item section active';
        }
        hideImage() {
            this.DOM.reveal.className = 'hover-reveal non-active';
            this.DOM.reveal.parentElement.className = 'nav-item section';
        }
    }
}