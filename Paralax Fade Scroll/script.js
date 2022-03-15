(function () {
    var img = document.getElementById('background'), opacity;
    var min = 0;
    
    function setBackgroundOpacity () {
      opacity = 0 + window.scrollY / (screen.height);
      img.style.opacity = opacity > min ? opacity : min;
    }
    
    window.addEventListener('scroll', setBackgroundOpacity);
  })();