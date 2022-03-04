let progressSection = document.querySelector('.progress-section');
let prgressBar = document.querySelector('.progress-bar');
let  progressNum = document.querySelector('.progress-num');


//comment part for mouse interaction
/*
let x, y;

window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
})
*/

function updateProgressBar(){
    //progressSection.style.transform = `translate(${x}px, ${y}px)`
    prgressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)

}
function getScrollPercentage(){
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) *100)
}

updateProgressBar()