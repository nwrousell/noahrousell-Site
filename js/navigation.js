var transitionElem = document.querySelector(".transition-effect");
var currentPage = "#home";

window.onload = function(){
    transitionElem.classList.remove("active");
    document.querySelectorAll(".arrow-right-container i")[0].addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage("#home", "#projects");
        }, 1000);
    });
    document.querySelectorAll(".arrow-right-container i")[1].addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage("#projects", "#contact");
        }, 1000);
    });
    document.querySelectorAll(".arrow-left-container i")[0].addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage("#projects", "#home");
        }, 1000);
    });
    document.querySelectorAll(".arrow-left-container i")[1].addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage("#contact", "#projects");
        }, 1000);
    });
    document.querySelector(".about-link").addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage(currentPage, "#home");
        }, 1000);
    });
    document.querySelector(".projects-link").addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage(currentPage, "#projects");
        }, 1000);
    });
    document.querySelector(".contact-link").addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage(currentPage, "#contact");
        }, 1000);
    });
    // Mobile Links
    document.querySelector(".about-link-mobile").addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage(currentPage, "#home");
        }, 1000);
    });
    document.querySelector(".projects-link-mobile").addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage(currentPage, "#projects");
        }, 1000);
    });
    document.querySelector(".contact-link-mobile").addEventListener("click", function(){
        transitionElem.classList.add("active");
        setTimeout(function(){
            switchPage(currentPage, "#contact");
        }, 1000);
    });
}
function switchPage(oldPage, newPage){
    document.querySelector(oldPage).classList.add("hide");
    document.querySelector(newPage).classList.remove("hide");
    transitionElem.classList.remove("active");
    currentPage = newPage;
}
