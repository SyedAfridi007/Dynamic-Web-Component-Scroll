const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('section');

const animateProgressBar = () =>{
    let scrollDistance = -section.getBoundingClientRect().top;
    //console.log(scrollDistance);

    let progressWidth = (scrollDistance/ (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    //console.log(progressWidth);

    let value = Math.floor(progressWidth);
    //console.log(value);

    if(value < 0){
        progressBar.style.width ="0%";

    }else{
        progressBar.style.width = value + "%";
    }
};


window.addEventListener("scroll", animateProgressBar);