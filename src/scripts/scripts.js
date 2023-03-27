(function() {})();

// document.addEventListener("DOMContentLoaded", function(event) {
//   function playVid() {
//     var vid = document.getElementById("video");
//     vid.play();
//   }
// });

document.querySelector(".hamburger-menu").addEventListener("click", function() {
  this.classList.toggle("hamburger-menu--open");
  document
    .querySelector(".responsive-menu")
    .classList.toggle("responsive-menu--open");
  document.querySelector("body").classList.toggle("u-no-overflow");
});

var output = document.getElementById("output"),
  startPos = true,
  enableScrolling = true;

// window.addEventListener(
//   "scroll",
//   function(e) {
//     var scrollTop =
//       window.pageYOffset ||
//       (document.documentElement || document.body.parentNode || document.body)
//         .scrollTop;

//     // disableScroll();
//     if (scrollTop > 0) {
//       if (document.querySelector(".body--hide-menu") == null)
//         document
//           .querySelector(".header")
//           .classList.add("header--fixed");
//       document
//         .querySelector(".hamburger-menu")
//         .classList.add("hamburger-menu--dark");

//       if (document.querySelector(".inner-banner--push-anim") != null) {
//         document.querySelector("body").classList.add("body--push");
//         if (startPos == true) {
//           scrolling();
//           startPos = false;
//         }
//       }
//     } else {
//       document
//         .querySelector(".hamburger-menu")
//         .classList.remove("hamburger-menu--dark");
//       document
//         .querySelector(".header")
//         .classList.remove("header--fixed");
//       if (document.querySelector(".inner-banner--push-anim") != null) {
//         document.querySelector("body").classList.remove("body--push");
//       }
//     }

//     //if (isAnimated)
//     //    enableScroll();
//     //if(!isAnimated)
//     //    disableScroll();
//   },
//   false
// );
if (document.getElementById("bannerScroll") != null) {
  document.getElementById("bannerScroll").addEventListener("click", function() {
    //window.scrollTo(0, 1000);

    scrollIt(document.querySelector(".inner-banner__content"));
  });
}

function scrollIt(element) {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: element.offsetHeight - 50
  });
}

//function scrollIt(destination) {
//    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700; var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear'; var callback = arguments[3];

//    // Predefine list of available timing functions
//    // If you need more, tween js is full of great examples
//    // https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L421-L737
//    var easings = {
//        linear: function linear(t) {
//            return t;
//        },
//        easeInQuad: function easeInQuad(t) {
//            return t * t;
//        },
//        easeOutQuad: function easeOutQuad(t) {
//            return t * (2 - t);
//        },
//        easeInOutQuad: function easeInOutQuad(t) {
//            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//        },
//        easeInCubic: function easeInCubic(t) {
//            return t * t * t;
//        },
//        easeOutCubic: function easeOutCubic(t) {
//            return --t * t * t + 1;
//        },
//        easeInOutCubic: function easeInOutCubic(t) {
//            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//        },
//        easeInQuart: function easeInQuart(t) {
//            return t * t * t * t;
//        },
//        easeOutQuart: function easeOutQuart(t) {
//            return 1 - --t * t * t * t;
//        },
//        easeInOutQuart: function easeInOutQuart(t) {
//            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
//        },
//        easeInQuint: function easeInQuint(t) {
//            return t * t * t * t * t;
//        },
//        easeOutQuint: function easeOutQuint(t) {
//            return 1 + --t * t * t * t * t;
//        },
//        easeInOutQuint: function easeInOutQuint(t) {
//            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
//        }
//    };

//    // Store initial position of a window and time
//    // If performance is not available in your browser
//    // It will fallback to new Date().getTime() - thanks IE < 10
//    var start = window.pageYOffset;
//    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
//    // const startTime = typeof(window.performance['now']) == 'function' ? performance.now() : new Date().getTime();

//    // Take height of window and document to sesolve max scrollable value
//    // Prevent requestAnimationFrame() from scrolling below maximum scollable value
//    // Resolve destination type (node or number)
//    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//    var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
//    var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

//    // If requestAnimationFrame is not supported
//    // Move window to destination position and trigger callback function
//    if ('requestAnimationFrame' in window === false) {
//        window.scroll(0, destinationOffsetToScroll);
//        if (callback) {
//            callback();
//        }
//        return;
//    }

//    // function resolves position of a window and moves to exact amount of pixels
//    // Resolved by calculating delta and timing function choosen by user
//    function scroll() {
//        var now = 'now' in window.performance ? performance.now() : new Date().getTime();
//        var time = Math.min(1, (now - startTime) / duration);
//        var timeFunction = easings[easing](time);
//        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

//        // Stop requesting animation when window reached its destination
//        // And run a callback function
//        if (window.pageYOffset === destinationOffsetToScroll) {
//            if (callback) {
//                callback();
//            }
//            return;
//        }

//        // If window still needs to scroll to reach destination
//        // Request another scroll invokation
//        requestAnimationFrame(scroll);
//    }

//    // Invoke scroll and sequential requestAnimationFrame
//    scroll();
//}

function scrolling() {
  enableScrolling = false;
  disableScroll();
  setTimeout(function() {
    enableScrolling = true;
    enableScroll();
  }, 1200);
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (enableScrolling === false) {
    if (window.addEventListener)
      // older FF
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

/*
(function () {

    // detect if IE : from http://stackoverflow.com/a/16657946		
    var ie = (function () {
        var undef, rv = -1; // Return value assumes failure.
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');

        if (msie > 0) {
            // IE 10 or older => return version number
            rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        } else if (trident > 0) {
            // IE 11 (or newer) => return version number
            var rvNum = ua.indexOf('rv:');
            rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
        }

        return ((rv > -1) ? rv : undef);
    }());


    // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179					
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [32, 37, 38, 39, 40], wheelIter = 0;

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function keydown(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                preventDefault(e);
                return;
            }
        }
    }

    function touchmove(e) {
        preventDefault(e);
    }

    function wheel(e) {
        // for IE 
        //if( ie ) {
        //preventDefault(e);
        //}
    }

    function disable_scroll() {
        window.onmousewheel = document.onmousewheel = wheel;
        document.onkeydown = keydown;
        document.body.ontouchmove = touchmove;
    }

    function enable_scroll() {
        window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
    }
    var classie = document.querySelector("main");
    var docElem = window.document.documentElement,
        scrollVal,
        isRevealed,
        noscroll,
        isAnimating,
        container = document.querySelector('main'),
        trigger = container.querySelector('#bannerScroll');

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    function scrollPage() {
        scrollVal = scrollY();

        if (noscroll && !ie) {
            if (scrollVal < 0) return false;
            // keep it that way
            window.scrollTo(0, 0);
        }

        if (classie.classList.contains('notrans')) {
            classie.classList.remove('notrans');
            return false;
        }

        // if( classie.has( container, 'notrans' ) ) {
        // 	classie.remove( container, 'notrans' );
        // 	return false;
        // }

        if (isAnimating) {
            return false;
        }

        if (scrollVal <= 0 && isRevealed) {
            toggle(0);
        }
        else if (scrollVal > 0 && !isRevealed) {
            toggle(1);
        }
    }

    function toggle(reveal) {
        isAnimating = true;

        if (reveal) {
            classie.classList.add('modify');
            // classie.add( container, 'modify' );
        }
        else {
            noscroll = true;
            disable_scroll();
            classie.classList.remove('modify');
            // classie.remove( container, 'modify' );
        }

        // simulating the end of the transition:
        setTimeout(function () {
            isRevealed = !isRevealed;
            isAnimating = false;
            if (reveal) {
                noscroll = false;
                enable_scroll();
            }
        }, 1200);
    }

    // refreshing the page...
    var pageScroll = scrollY();
    noscroll = pageScroll === 0;

    disable_scroll();

    if (pageScroll) {
        isRevealed = true;
        classie.classList.add('notrans');
        classie.classList.add('modify');
        // classie.add( container, 'notrans' );
        // classie.add( container, 'modify' );
    }

    window.addEventListener('scroll', scrollPage);
    trigger.addEventListener('click', function () { toggle('reveal'); });
})();
*/

// // mdc effects
// (function() {
//   mdc.autoInit();

//   // text fields
//   var tfs = document.querySelectorAll(".mdc-textfield");
//   for (var i = 0, tf; (tf = tfs[i]); i++) {
//     mdc.textfield.MDCTextfield.attachTo(tf);
//   }
// })();
