// $(function(){
//     var shrinkHeader = 300;
//      $(window).scroll(function() {
//        var scroll = getCurrentScroll();
//          if ( scroll >= shrinkHeader ) {
//               $('.header').addClass('shrink');
//            }
//            else {
//                $('.header').removeClass('shrink');
//            }
//      });
//    function getCurrentScroll() {
//        return window.pageYOffset || document.documentElement.scrollTop;
//        }
//    });

var shrinkHeader = 300;
window.addEventListener("scroll", function () {
  var scroll = getCurrentScroll();
  if (scroll >= shrinkHeader) {
    this.document.querySelector('.header').classList.add('shrink')
  } else {
    this.document.querySelector('.header').classList.remove('shrink')
  }
});

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
