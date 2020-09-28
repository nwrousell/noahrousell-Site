var transitionElem = document.querySelector(".transition-effect");
var currentPage = "home";
var newPage;

var urlVars = window.location.href.split("?");
if(urlVars.length != 1){ // If there is a variable
    var pageToLoad = urlVars[1].split("=")[1].split("&")[0];
    var currentPage = pageToLoad;
    startSwitch(null, pageToLoad);
}

window.onload = function(){
    transitionElem.classList.remove("active");
    var navArrows = document.querySelectorAll(".arrow-right-container i, .arrow-left-container i, .about-link, .projects-link, .contact-link, .home-link");
    for (var i = 0; i < navArrows.length; i++) {
        navArrows[i].addEventListener("click", startSwitch);
    }

    // document.querySelectorAll(".arrow-right-container i")[0].addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage("#home", "#projects");
    //     }, 1000);
    // });
    // document.querySelectorAll(".arrow-right-container i")[1].addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage("#projects", "#contact");
    //     }, 1000);
    // });
    // document.querySelectorAll(".arrow-left-container i")[0].addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage("#projects", "#home");
    //     }, 1000);
    // });
    // document.querySelectorAll(".arrow-left-container i")[1].addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage("#contact", "#projects");
    //     }, 1000);
    // });
    // var aboutLinks = document.querySelectorAll(".about-link");
    // for(var i=0;i<aboutLinks.length;i++){
    //     aboutLinks[i].addEventListener("click", function(){
    //         transitionElem.classList.add("active");
    //         setTimeout(function(){
    //             switchPage(currentPage, "#home");
    //         }, 1000);
    //     });
    // }
    // document.querySelector(".projects-link").addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage(currentPage, "#projects");
    //     }, 1000);
    // });
    // document.querySelector(".contact-link").addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage(currentPage, "#contact");
    //     }, 1000);
    // });
    // // Mobile Links
    // document.querySelector(".about-link-mobile").addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage(currentPage, "#home");
    //     }, 1000);
    // });
    // document.querySelector(".projects-link-mobile").addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage(currentPage, "#projects");
    //     }, 1000);
    // });
    // document.querySelector(".contact-link-mobile").addEventListener("click", function(){
    //     transitionElem.classList.add("active");
    //     setTimeout(function(){
    //         switchPage(currentPage, "#contact");
    //     }, 1000);
    // });
}
function startSwitch(evt, pageToLoad){
    transitionElem.classList.add("active");
    if(pageToLoad == undefined){
        newPage = this.classList[0].split("-")[1];
    }else{
        newPage = pageToLoad;
    }
    setTimeout(() => {
        switchPage();
    }, 1000);
}
function switchPage(){
    document.querySelector("#"+currentPage).classList.add("hide");
    document.querySelector("#"+newPage).classList.remove("hide");
    transitionElem.classList.remove("active");
    currentPage = newPage;
}
