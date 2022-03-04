
var hei = document.querySelector("#header");
var nav = document.querySelector(".navbar");
var h = hei.offsetHeight;
//console.log(h);


window.addEventListener("scroll", function(){
    //var d = this.scrollY;
    //console.log(d);
    //console.log("scr")
    if(this.scrollY > h){
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    }

})

