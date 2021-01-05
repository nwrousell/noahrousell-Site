var canvas, ctx;
let fps = 30;
const pointsAmount = 100;
var pointSize = 5;
let pointMaxSpeed = 70/fps;
let maxLineLength = 80;
let updateIntervalID;

let dpi = window.devicePixelRatio;

var points = [];

function fix_dpi() {
//get CSS height
//the + prefix casts it to an integer
//the slice method gets rid of "px"
let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
//get CSS width
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
//scale the canvas
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);
}

function addRandomPoint(){
  let randX = Math.round(Math.random()*canvas.width);
  let randY = Math.round(Math.random()*canvas.height);
  let randVelX = (Math.random()*pointMaxSpeed - pointMaxSpeed/2);
  let randVelY = (Math.random()*pointMaxSpeed - pointMaxSpeed/2);
  points.push({x: randX, y: randY, xVel: randVelX, yVel: randVelY});
}

function setUpBgEffect(page) {
    page = page || "home";
    canvas = document.querySelector("#"+page+" canvas");
    ctx = canvas.getContext("2d");

    if(updateIntervalID){
        // Clear old interval
        clearInterval(updateIntervalID);
    }
    updateIntervalID = setInterval(update, 1000/fps);
}

function update(){
  if(points.length<pointsAmount){
    addRandomPoint();
  }

  for(var i=0;i<points.length;i++){
    points[i].x+=points[i].xVel;
    points[i].y+=points[i].yVel;

    if(points[i].x < 0 || points[i].x > canvas.width || points[i].y < 0 || points[i].y > canvas.height){
      points.splice(i, 1);
    }
  }
  draw();
}
function draw(){
  fix_dpi();
  ctx.fillStyle = "#222831";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#30475e";
  for(var i=0;i<points.length;i++){
    ctx.fillRect(Math.round(points[i].x), Math.round(points[i].y), pointSize, pointSize);
    for(var x=0;x<points.length;x++){
      if(x != i){
        if(getDistance(points[i], points[x]) <= maxLineLength){
          ctx.strokeStyle = "#30475e";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
   ctx.moveTo(points[i].x+0.5, points[i].y+0.5);
  ctx.lineTo(points[x].x+0.5,points[x].y+0.5);
  ctx.stroke();
        }
      }
    }
  }
}
function getDistance(point1, point2) {
	var xDiff = point1.x - point2.x;
	var yDiff = point1.y - point2.y;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
