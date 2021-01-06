var transitionElem = document.querySelector(".transition-effect");
var currentPage = "home";
var newPage;

var urlVars = window.location.href.split("?");
if(urlVars.length != 1){ // If there is a variable
    var pageToLoad = urlVars[1].split("=")[1].split("&")[0];
    pageToLoad = pageToLoad.split("#")[0];
    startSwitch(null, pageToLoad);
    setTimeout(() => {
        currentPage = pageToLoad;
    },1100);
}

function setUpNavigation(){
    transitionElem.classList.remove("active");
    var navArrows = document.querySelectorAll(".arrow-right-container i, .arrow-left-container i, .about-link, .projects-link, .contact-link, .home-link");
    for (var i = 0; i < navArrows.length; i++) {
        navArrows[i].addEventListener("click", startSwitch);
    }
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

    // Re-start background effect
    setUpBgEffect(currentPage)
    var newURL;
    if(window.location.href.includes("=")){
        newURL = window.location.href.split("=")[0]+"="+currentPage;
    }else{
        newURL = window.location.href+"?page="+currentPage;
    }
    window.history.replaceState('', '', newURL);
}
