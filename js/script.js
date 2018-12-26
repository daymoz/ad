function CryptEffect(element) {
    var that = this;
    const string = element.innerHTML;
    
    this.letterIt = function(classes = null) {
      element.textContent = '';
      for(var i = 0; i <= string.length - 1; i++) {
        var span = document.createElement('span');
        span.innerHTML = string.charAt(i);
        if(/\s/.test(string.charAt(i))) {
            span.classList.add('is-space');
        }
        if(classes) {
            (classes).forEach(classe => {
                span.classList.add(classe);
            });
        }
        element.appendChild(span);
      }
    }
}

var $titleIntro = document.getElementById('title-intro');
var titleIntro = new CryptEffect($titleIntro);
titleIntro.letterIt(['letter']);

TweenMax.to('#title-intro', 0.25, {
    opacity: 1,
    ease: Power3.easeIn,
})

//GSAP ANIMATION
document.addEventListener('DOMContentLoaded', function(event) {

    var tlIntro = new TimelineLite;

    // tlIntro
    //     .staggerTo('.letter', 0.25, {
    //         y: -20,
    //         opacity: 0,
    //         ease: Power3.easeOut,
    //         delay: 1.5,
    //     }, 0.1)
    //     .to('#loader', 0.25, {
    //         opacity: 0,
    //         ease: Power3.easeOut,
    //     })

    // TweenMax.to('#intro', 1, {
    //     y: '-100%',
    //     ease: Expo.easeInOut,
    //     delay: 3,
    // })
    // TweenMax.to('#homepage', 1, {
    //     y: 0,
    //     ease: Expo.easeInOut,
    //     delay: 3,
    // })
    // TweenMax.to('body', 0.2, {
    //     overflow: 'unset',
    //     delay: 4,
    //     onComplete: function() {
    //         var intro = document.getElementById('intro');
    //         intro.remove();
    //     }
    // })
    // TweenMax.to('#intro', 0.2, {
    //     display: 'none',
    //     visibility: 'hidden',
    //     delay: 4,
    // });
});

// var menuTl = new TimelineLite;
//         var subMenu = this.children[2];
//         menuTl
//             .to(subMenu, 0.2,  {
//                 visibility: 'visible',
//                 opacity: 1,
//                 ease: Power3.easeIn,
//             })

// var mainNavItems = document.querySelectorAll('.nav-site-item');
// console.log(mainNavItems);
// mainNavItems.forEach(function(element) {
//     element.addEventListener('mouseenter', function(e) {
//         menuTl;
//     });
// });



