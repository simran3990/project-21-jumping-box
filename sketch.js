var ball;
var edges;
var block1,block2,block3,block4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   

   
    block1=createSprite(86,590,170,20);
    block1.shapeColor="blue";
    
    block2=createSprite(280,590,170,20);
    block2.shapeColor="yellow";

    block3=createSprite(480,590,170,20);
    block3.shapeColor="purple";

    block4=createSprite(680,590,170,20);
    block4.shapeColor="green";

    ball=createSprite(100,40,40,40);
    ball.shapeColor="white";
    ball.x=Math.round(random(20,500));
    ball.velocityX=4;
    ball.velocityY=9;

}

function draw() {
    background("lightgrey");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if (ball.isTouching(block1)&& ball.bounceOff(block1)){
        ball.shapeColor="blue";
        music.play();
    }
    if (ball.isTouching(block2)){
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
    if (ball.isTouching(block3)&& ball.bounceOff(block3)){
        ball.shapeColor="purple";
    }
    if (ball.isTouching(block4)&& ball.bounceOff(block4)){
        ball.shapeColor="green";
    }
    drawSprites();  
}
