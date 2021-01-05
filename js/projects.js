var tags;
var gameDevProjects = ['<div class="col project-container-outside s12 m6 l4"><div class="project-container-inside center"><img src="imgs/projects/puzzling-adventure.png" alt=""><p class="regular-text sm-text text-left">A puzzle game I made with Unity with some intriguing puzzles.</p><a href="#" target="_blank" class="text-half-bg regular-text sm-text">Play it</a></div></div>','<div class="col project-container-outside s12 m6 l4"><div class="project-container-inside center"><img src="imgs/projects/rewinding-evolution.png" alt=""><p class="regular-text sm-text text-left">My first public game / first game jam - 2D top-down adventure shooter.</p><a href="https://noahrousell.itch.io/rewinding-evolution" target = "_blank" class="text-half-bg regular-text sm-text">Play it</a></div></div>'];

var projects = [
    {
        name: "Big-Timer",
        tags: ['web', 'app'],
        imgSrc: "imgs/projects/big-timer.png",
        body: "A literal big timer I made with a ton of nifty features  and cool animations.",
        btns: [
            {
                text: 'Visit',
                link: 'https://big-timer.mukduk.io'
            }
        ],
        included: false
    },
    {
        name: "Recount",
        tags: ['web', 'app'],
        imgSrc: "imgs/projects/recount.png",
        body: "A website I built for an app I've been working on.",
        btns: [
            {
                text: 'Visit Site',
                link: 'https://recount.mukduk.io/'
            }
        ],
        included: false
    },
    {
        name: "Cycles Endurance Site",
        tags: ['web'],
        imgSrc: "imgs/projects/cycles-endurance.png",
        body: "A website I built with WordPress for a local Bike Shop.",
        btns: [
            {
                text: 'Visit Site',
                link: 'https://www.cyclesendurance.com/'
            }
        ],
        included: false
    },
    {
        name: "Pocket Counter",
        tags: ['app'],
        imgSrc: "imgs/projects/pocket-counter.png",
        body: "A Progressive Web App I made and deployed to the Google Play Store that lets users keep games' scores in the cloud.",
        btns: [
            {
                text: 'Visit Store Listing',
                link: 'https://play.google.com/store/apps/details?id=com.noahrousell.pocketcounter'
            }
        ],
        included: false
    },
    {
        name: "A Puzzling Adventure",
        tags: ['game'],
        imgSrc: "imgs/projects/puzzling-adventure.png",
        body: "A puzzle game I made with Unity that has some intriguing puzzles.",
        btns: [
            {
                text: 'Play',
                link: 'https://noahrousell.itch.io/a-puzzling-adventure'
            }
        ],
        included: false
    },
    {
        name: "Rewinding Evolution",
        tags: ['game'],
        imgSrc: "imgs/projects/rewinding-evolution.png",
        body: "My first public game / game jam. It's a 2D top-down adventure shooter.",
        btns: [
            {
                text: 'Play',
                link: 'https://noahrousell.itch.io/rewinding-evolution'
            }
        ],
        included: false
    },
    {
        name: "Google Meet Self-Hider",
        tags: ['web'],
        imgSrc: "imgs/projects/google-meet-extension.png",
        body: "A simple Chrome Extension that lets users hide themselves (for themselves), so they don't get self-conscious in meetings.",
        btns: [
            {
                text: 'Extension',
                link: 'https://chrome.google.com/webstore/detail/google-meet-self-hider/doademagllblanlbmlfojpigmgiddndh?hl=en'
            }
        ],
        included: false
    }
];

function setUpProjects(){
    tags = [
        {
            tag: "all",
            pressed: true,
            element: document.querySelector("#all")
        },
        {
            tag: "web",
            pressed: false,
            element: document.querySelector("#web")
        },
        {
            tag: "app",
            pressed: false,
            element: document.querySelector("#app")
        },
    ];
    for(var i=0;i<tags.length;i++){
        tags[i].element.addEventListener("click", togglePressed);
    }
    loadProjects();
}
function togglePressed(){
    var tagID = this.id;
    for(var i=0;i<tags.length;i++){
        if(tags[i].tag == tagID){
            // This tag was pressed
            if(tags[i].pressed){ // Switching off
                // Check to see that at least one other tag is pressed
                if(otherTagPressed(i)){
                    tags[i].pressed = false;
                }
            }else { // Switching on
                if(tags[i].tag=="all"){
                    // If switching to all -> unpress all others
                    for(var x=1;x<tags.length;x++){
                        tags[x].pressed = false;
                    }
                    tags[0].pressed = true;
                }else {
                    // Check if only tag on is all
                    if(tags[0].pressed && !otherTagPressed(0)){
                        tags[0].pressed = false;
                    }
                    tags[i].pressed = true;
                }

            }
            for(var x = 0;x<tags.length;x++) updateTagClasses(x);
            loadProjects();
        }
    }
}
function updateTagClasses(index){
    if(tags[index].pressed){
        // tags[index].element.classList.remove("pressed");
        tags[index].element.classList.add("pressed");
        tags[index].element.classList.remove("not-pressed");
    }else{
        // tags[index].element.classList.remove("not-pressed");
        tags[index].element.classList.remove("pressed");
        tags[index].element.classList.add("not-pressed");
    }
}
function otherTagPressed(indexToExclude){
    var otherPressed = false;
    for(var i=0;i<tags.length;i++){
        if(tags[i].pressed && i != indexToExclude) otherPressed = true;
    }
    return otherPressed;
}
function loadProjects(){
    // Clear projects first
    document.querySelector(".projects-container").innerHTML = "";
    // Clear included values
    for(var i=0;i<projects.length;i++){
        projects[i].included = false;
    }

    if(tags[0].pressed && !otherTagPressed(0)){
        // All tag down
        for (var i = 0; i < projects.length; i++) {
            if(!projects[i].tags.includes("game")){
                // Dirty way of not showing my games anymore
                document.querySelector(".projects-container").appendChild(createProjectCard(projects[i]));
            }
        }
    } else{
        // User wants specific tag(s)
        // Loop through tags minus "all" and render those
        for (var i = 1; i < tags.length; i++) {
            if(tags[i].pressed){
                for(var x=0;x<projects.length;x++){
                    if(projects[x].tags.includes(tags[i].tag)){
                        // Include the project if it's not already included
                        if(!projects[x].included){
                            // Include this project
                            document.querySelector(".projects-container").appendChild(createProjectCard(projects[x]));
                            projects[x].included = true;
                        }
                    }
                }
            }
        }
    }

}
function createProjectCard(projectInfo){
    var project = document.createElement("DIV");
    project.classList.add("col");
    project.classList.add("project-container");
    project.classList.add("s12");
    project.classList.add("m6");
    project.classList.add("l4");

    var btnsCode = "";
    for (var i = 0; i < projectInfo.btns.length; i++) {
        btnsCode += `<a href="${projectInfo.btns[i].link}" target = "_blank" class="text-half-bg regular-text sm-text">${projectInfo.btns[i].text}</a>`;
    }

    project.innerHTML = `<div class="project-container-inside center">
    <img src="${projectInfo.imgSrc}" alt="Noah Rousell ${projectInfo.name} Logo">
        <p class="regular-text sm-text text-left">${projectInfo.body}</p>
        ${btnsCode}
    </div>`;

    return project;
}
