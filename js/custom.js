/*
 Theme Name: Resume
 Theme URI: http://demo.newtemplate.net/resume/index.html
 Author: NewTemplate
 Author URI: https://themeforest.net/user/newtemplete
 Version: 0.1
 Description:  Resume One Page HTML5 Theme comes out with tons of powerful features. Its modern, attractive and clean design.
 */


! function(e) {
    "use strict";

    function o(o) {
        var t = e(document).scrollTop();
        e("#menu_scroll li a").each(function() {
            var o = e(this),
                a = e(o.attr("href"));
            a.position().top <= t && a.position().top + a.height() > t ? (e("#menu_scroll li a").removeClass("active"), o.addClass("active")) : o.removeClass("active")
        })
    }
    e(window).on("load", function() {
        e("#loader-wrapper").delay(100).fadeOut(500)
    }), e(window).on("scroll", function() {
        e(window).scrollTop() >= 5 ? (e(".header-area").addClass("fixed"), e(".header-area a.btn").addClass("button-scheme")) : (e(".header-area").removeClass("fixed"), e(".header-area a.btn").removeClass("button-scheme"))
    }), e(".water-effect").ripples({
        resolution: 512,
        perturbance: .04,
        dropRadius: 20
    }), e(document).on("scroll", o), e(".scroll").on("click", function(t) {
        t.preventDefault(), e(document).off("scroll"), e("a").each(function() {
            e(this).removeClass("active")
        }), e(this).addClass("active");
        var a = this.hash,
            r = e(a);
        e("html, body").stop().animate({
            scrollTop: r.offset().top + 2
        }, 1e3, "swing", function() {
            e(document).on("scroll", o)
        })
    }), e(window).on("load", function() {
        var o, t = e(".works-container");
        t.isotope({
            itemSelector: ".works-item",
            layoutMode: "fitRows",
            filter: function() {
                var t = e(this);
                return !o || t.is(o)
            }
        }), e(".works-filter-wrap").on("click", ".works-filter li", function() {
            o = e(this).attr("data-filter"), t.isotope()
        }), e(".works-filter li").on("click", function() {
            e(".works-filter li").removeClass("tab-active"), e(this).addClass("tab-active")
        })
    }), e(".testimonial-carousel").owlCarousel({
        loop: !0,
        margin: 15,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            600: {
                items: 1,
                nav: !0
            },
            1e3: {
                items: 1,
                nav: !0
            }
        }
    }), e(".blog-carousel").owlCarousel({
        loop: !0,
        margin: 15,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        dots: !1,
        nav: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), e(function() {
        e(".counter").countimator()
    });
    var t = document.querySelectorAll(".parallax_img");
    window.onscroll = function() {
        [].slice.call(t).forEach(function(e, o) {
            e.getBoundingClientRect();
            var t = "0 " + .08 * window.pageYOffset + "px";
            e.style.backgroundPosition = t
        })
    };
    var a = function(o, t, a) {
        "Disable" == o ? e("#" + t).attr("disabled", "disabled") : e("#" + t).removeAttr("disabled"), e("#" + t).val(a)
    };
    e("#validation").validate({
        errorElement: "span",
        rules: {
            project: {
                required: !0
            },
            name: {
                required: !0
            },
            email: {
                required: !0
            },
            company: {
                required: !0
            },
            phone: {
                required: !0
            },
            budget: {
                required: !0
            },
            message: {
                required: !0
            }
        },
        messages: {
            project: {
                required: "Required."
            },
            name: {
                required: "Required."
            },
            email: {
                required: "Required."
            },
            company: {
                required: "Required."
            },
            phone: {
                required: "Required."
            },
            budget: {
                required: "Required."
            },
            message: {
                required: "Required."
            }
        },
        submitHandler: function(o) {
            var t, r, i;
            return a("Disable"), t = "submit", i = {
                complete: function(o) {
                    swal({
                        title: "Thank you!",
                        text: "Your message has been successfully Submitted.",
                        type: "success",
                        confirmButtonText: "Close",
                        timer: 5e3
                    }), e("#validation")[0].reset(), a("Enabled", t, r)
                },
                error: function(e) {
                    var o = e.responseText;
                    console.log(o)
                }
            }, e("#" + "validation").ajaxSubmit(i), !1
        }
    }), (new WOW).init()
}(jQuery);