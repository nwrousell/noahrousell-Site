var scroll = 0;
var duration = 0.9;
var endPosition = null;
var scrollInterval;
var fps = 60;
var distance;
window.onload = function(){
    document.querySelectorAll(".arrow-down-container i")[0].addEventListener("click", () => {
        scrollToTarget("#projects");
    });
    document.querySelectorAll(".arrow-down-container i")[1].addEventListener("click", () => {
        scrollToTarget("#contact");
    });
    document.querySelectorAll(".arrow-up-container i")[0].addEventListener("click", () => {
        scrollToTarget("#home");
    });
}



function scrollToTarget(target) {
    scroll = window.pageYOffset;
    endPosition = document.querySelector(target).getBoundingClientRect().bottom;
    scrollInterval = setInterval(scrollSmooth, 1000/fps);
    distance = endPosition - scroll;
    if(target == "#contact"){
        console.log(scroll, endPosition);
    }
}
function scrollSmooth(){
    if(scroll - endPosition > 0){
        scroll += distance / duration / fps;
        window.scrollTo(0, scroll);
        if(window.pageYOffset <= endPosition){
            clearInterval(scrollInterval);
            console.log("Cleared interval");
        }
    }else{
        scroll += distance / duration / fps;
        window.scrollTo(0, scroll);
        if(window.pageYOffset >= endPosition){
            clearInterval(scrollInterval);
            console.log("Cleared interval");
        }
    }
}
