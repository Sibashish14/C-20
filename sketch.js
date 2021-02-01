var canvas;
var music;
var redRect;
var yellowRect,blueRect,greenRect;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    yellowRect=createSprite(700,590,200,15);
    yellowRect.shapeColor="yellow";
    greenRect=createSprite(500,590,200,15);
    greenRect.shapeColor="green";
    redRect=createSprite(300,590,200,15);
    redRect.shapeColor="red";
    blueRect=createSprite(100,590,200,15);
    blueRect.shapeColor="blue";
    ball=createSprite(600,300,20,20);
    ball.velocityY=5;
    ball.velocityX=0;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges=createEdgeSprites();
    


    //add condition to check if box touching surface and make it box
    if(((greenRect.x-ball.x) < (greenRect.width/2 - ball.width/2)) &&
    ((greenRect.y-ball.y) < (greenRect.height/2 - ball.height/2))){
       ball.shapeColor="green";
       ball.velocityY=ball.velocityY*(-1);
       ball.velocityX=ball.velocityX*(-1);
    }
    if(((redRect.x-ball.x) < (redRect.width/2-ball.width/2)) &&
    ((redRect.y-ball.y) < (redRect.height/2 - ball.height/2))){
       ball.shapeColor="red";
       ball.velocityY=ball.velocityY*(-1);
       ball.velocityX=ball.velocityX*(-1);
    }
    if(((blueRect.x-ball.x) < (blueRect.width/2 - ball.width/2)) &&
    ((blueRect.y-ball.y) < (blueRect.height/2 - ball.height/2))){
       ball.shapeColor="blue";
       ball.velocityY=ball.velocityY*(-1);
       ball.velocityX=ball.velocityX*(-1);
    }
    if(((yellowRect.x-ball.x) < (yellowRect.width/2-ball.width/2)) &&
    ((yellowRect.y - ball.y) < (yellowRect.height/2-ball.height/2))){
       ball.shapeColor="yellow";
       ball.velocityY=ball.velocityY*(-1);
       ball.velocityX=ball.velocityX*(-1);
    }
    drawSprites(); 
}