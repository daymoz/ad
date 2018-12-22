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

//GSAP ANIMATION
document.addEventListener('DOMContentLoaded', function(event) {

    var tlIntro = new TimelineLite;

    tlIntro
        .staggerTo('.letter', 0.25, {
            y: -20,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 1.5,
        }, 0.1)
        .to('#loader', 0.25, {
            opacity: 0,
            ease: Power3.easeOut,
        })

    TweenMax.to('#intro', 1, {
        y: '-100%',
        ease: Expo.easeInOut,
        delay: 3,
    })
    TweenMax.to('#homepage', 1, {
        y: 0,
        ease: Expo.easeInOut,
        delay: 3,
    })
});
        



