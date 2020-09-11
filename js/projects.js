var tags;
var webDevProjects = ['<div class="col project-container-outside m4"><div class="project-container-inside center"><img src="imgs/projects/cycles-endurance.png" alt=""><p class="regular-text sm-text text-left">A website I built with WordPress for a local Bike Shop.</p><a href="#" class="text-half-bg regular-text sm-text">Visit Site</a></div></div>'];
var gameDevProjects = ['<div class="col project-container-outside m4"><div class="project-container-inside center"><img src="imgs/projects/puzzling-adventure.png" alt=""><p class="regular-text sm-text text-left">A puzzle game I made with Unity with some intriguing puzzles.</p><a href="#" class="text-half-bg regular-text sm-text">Play it</a></div></div>'];
var appProjects = [""];
window.onload = function(){
    tags = [
        {
            tag: "all",
            pressed: true,
            element: document.querySelector("#all"),
            projects: [webDevProjects,gameDevProjects,appProjects]
        },
        {
            tag: "webDev",
            pressed: false,
            element: document.querySelector("#webDev"),
            projects: webDevProjects
        },
        {
            tag: "apps",
            pressed: false,
            element: document.querySelector("#apps"),
            projects: appProjects
        },
        {
            tag: "gameDev",
            pressed: false,
            element: document.querySelector("#gameDev"),
            projects: gameDevProjects
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
    var code = "";
    if(tags[0].pressed && !otherTagPressed(0)){
        for(var i=0;i<tags[0].projects.length;i++){
            for(var x=0;x<tags[0].projects[i].length;x++){
                code += tags[0].projects[i][x];
            }
        }
    } else{
        for(var i=1;i<tags.length;i++){
            if(tags[i].pressed){
                for(var x=0;x<tags[i].projects.length;x++){
                    code+=tags[i].projects[x];
                }
            }
        }
    }

    document.querySelector(".projects-container.row").innerHTML = code;

}
