var md;
var coins
var movement = 0;

const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var wld,eng;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,
box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,
box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;

var player1;
function preload(){
 md=loadImage("mazedesign.jpg");
 p=loadImage("pirate.png")
 t=loadImage("tribe.png")
 ra=loadImage("t.jpg")
}

function setup(){
        createCanvas(1300,600)
        eng=Engine.create()
        wld=eng.world
        //create box
        box1=createSprite(80,278,50,515)
        box2=createSprite(650,20,1190,20)
        box3=createSprite(1218,278,50,515)
        box4=createSprite(650,540,1190,20)
        box5=createSprite(350,130,490,20)
        box6=createSprite(600,155,30,70)
        box7=createSprite(750,185,380,20)
        box8=createSprite(255,45,20,70)
        box9=createSprite(230,75,70,10)
        box10=createSprite(360,100,40,50)
        box11=createSprite(500,50,50,50)
        box12=createSprite(720,130,50,100)
        box13=createSprite(700,80,90,20)
        box14=createSprite(850,80,40,100)
        box15=createSprite(960,155,40,170)
        box16=createSprite(990,245,200,20)
        box17=createSprite(1050,220,30,50)
        box18=createSprite(1010,80,160,20)
        box19=createSprite(1150,140,100,20)
        box20=createSprite(200,480,30,100)
        box21=createSprite(410,430,450,20)
        box22=createSprite(635,405,50,70)
        box23=createSprite(320,380,30,100)
        box24=createSprite(300,320,150,20)
        box25=createSprite(205,310,40,40)
        box26=createSprite(140,373,100,10)
        box27=createSprite(600,480,550,10)
        box28=createSprite(1100,480,250,10)
        box29=createSprite(840,450,30,60)
        box30=createSprite(800,430,50,20)
        box31=createSprite(980,415,40,140)
        box32=createSprite(1010,430,100,20)
        box33=createSprite(950,380,100,20)
        box34=createSprite(1150,370,100,30)
        box35=createSprite(1100,335,30,100)
        box36=createSprite(970,297,250,24)
        box37=createSprite(700,315,350,20)
        box38=createSprite(800,370,20,100)
        box39=createSprite(550,340,20,50)
        box40=createSprite(500,360,100,10)
        box41=createSprite(310,180,270,10)
        box42=createSprite(200,210,30,50)
        box43=createSprite(370,230,400,10)
        box44=createSprite(600,300,20,40)
        box45=createSprite(750,300,20,40)
       
        //create player
        player1=createSprite(150,90,30,30)
       // player1.shapeColor="red"
        player1.addImage(p)
        player1.scale=0.02

       
        //create npc 
        npc1=createSprite(700,250,30,30)
        npc1.shapeColor="blue"
        npc1.velocityX=-7
        npc1.addImage(t)
        npc1.scale=0.04
        npc1.debug=true

        npc2=createSprite(1000,500,30,30)
        npc2.shapeColor="yellow"
        npc2.velocityX=7
        npc2.addImage(t)
        npc2.scale=0.04
        npc2.debug=true


        npc3=createSprite(700,400,30,30)
        npc3.shapeColor="pink"
        npc3.velocityX=-7
        npc3.addImage(t)
        npc3.scale=0.04
        npc3.debug=true

        npc4=createSprite(900,470,30,30)
        npc4.shapeColor="green"
        npc4.velocityX=7
        npc4.addImage(t)
        npc4.scale=0.04
        npc4.debug=true
    
        npc5=createSprite(400,200,30,30)
        npc5.shapeColor="black"
        npc5.velocityX=7
        npc5.addImage(t)
        npc5.scale=0.04
        npc5.debug=true

        npc6=createSprite(1100,250,30,30)
        npc6.velocityX=7
        npc6.addImage(t)
        npc6.scale=0.04
        npc6.debug=true

        
       for(var i=100;i<340;i+=30){
        coins=createSprite(i+10,100,10,10)
        coins.shapeColor="yellow"
    }
    for(var i=100;i<150;i=i+30){
        coins=createSprite(320,i-50,10,10)
        coins.shapeColor="yellow"
    }
    for(var i=315;i<450;i+=30){
        coins=createSprite(i,50,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=80;i<140;i+=30){
        coins=createSprite(420,i,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=435;i<700;i+=30){
        coins=createSprite(i,110,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<270;i+=30){
        coins=createSprite(645,i-100,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<280;i+=30){
        coins=createSprite(605,i-180,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<830;i+=30){
        coins=createSprite(i,435+20,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<1140;i+=30){
        coins=createSprite(i,435+80,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<900;i+=30){
        coins=createSprite(i,210,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<1240;i+=30){
        coins=createSprite(i-100,270,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<440;i+=30){
        coins=createSprite(135,i-70,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<580;i+=30){
        coins=createSprite(i-50,165,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=235;i<400;i+=50){
        coins=createSprite(1135,i-50,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=355;i<590;i+=50){
        coins=createSprite(i,406,10,10)
        coins.shapeColor="yellow"

    }
    for(var i=155;i<590;i+=50){
        coins=createSprite(i,406,10,10)
        coins.shapeColor="yellow"

    }
      
       

}

function draw(){
 background(ra)
 Engine.update(eng)
 player1.velocityX=0
 player1.velocityY=0
 //move the players
 if(keyDown("UP_ARROW")){player1.velocityY-=5}
 if(keyDown("DOWN_ARROW")){player1.velocityY+=5}
 if(keyDown("LEFT_ARROW")){player1.velocityX-=5}
 if(keyDown("RIGHT_ARROW")){player1.velocityX+=5}
 
 //bounceOff for palyer
 player1.collide(box1)
 player1.collide(box2)
 player1.collide(box3)
 player1.collide(box4)
 player1.collide(box5)
 player1.collide(box6)
 player1.collide(box7)
 player1.collide(box8)
 player1.collide(box9)
 player1.collide(box10)
 player1.collide(box11)
 player1.collide(box12)
 player1.collide(box13)
 player1.collide(box14)
 player1.collide(box15)
 player1.collide(box16)
 player1.collide(box17)
 player1.collide(box18)
 player1.collide(box19)
 player1.collide(box20)
 player1.collide(box21)
 player1.collide(box22)
 player1.collide(box23)
 player1.collide(box24)
 player1.collide(box25)
 player1.collide(box26)
 player1.collide(box27)
 player1.collide(box28)
 player1.collide(box29)
 player1.collide(box30)
 player1.collide(box31)
 player1.collide(box32)
 player1.collide(box33)
 player1.collide(box34)
 player1.collide(box35)
 player1.collide(box36)
 player1.collide(box37)
 player1.collide(box38)
 player1.collide(box39)
 player1.collide(box40)
 player1.collide(box41)
 player1.collide(box42)
 player1.collide(box43)
 player1.collide(box44)
 player1.collide(box45)




  if(npc1.collide(box1)||
  npc1.collide(box2)||
  npc1.collide(box3)||
  npc1.collide(box4)||
  npc1.collide(box5)||
  npc1.collide(box6)||
  npc1.collide(box7)||
  npc1.collide(box8)||
  npc1.collide(box9)||
  npc1.collide(box10)||
  npc1.collide(box11)||
  npc1.collide(box12)||
  npc1.collide(box13)||
  npc1.collide(box14)||
  npc1.collide(box15)||
  npc1.collide(box16)||
  npc1.collide(box17)||
  npc1.collide(box18)||
  npc1.collide(box19)||
  npc1.collide(box20)||
  npc1.collide(box21)||
  npc1.collide(box22)||
  npc1.collide(box23)||
  npc1.collide(box24)||
  npc1.collide(box25)||
  npc1.collide(box26)||
  npc1.collide(box27)||
  npc1.collide(box28)||
  npc1.collide(box29)||
  npc1.collide(box30)||
  npc1.collide(box31)||
  npc1.collide(box32)||
  npc1.collide(box33)||
  npc1.collide(box34)||
  npc1.collide(box35)||
  npc1.collide(box36)||
  npc1.collide(box37)||
  npc1.collide(box38)||
  npc1.collide(box39)||
  npc1.collide(box40)||
  npc1.collide(box41)||
  npc1.collide(box42)||
  npc1.collide(box43)||
  npc1.collide(box44)||
  npc1.collide(box45)){
    var r=Math.round(random(1,4))
    if(r==1){
            npc1.velocityX=4
    }else if(r==2){
        npc1.velocityX=-4
    }
    else if(r==3){
        npc1.velocityY=4
    }
    else{
        npc1.velocityY=-4
    }
    console.log(npc1.velocityX)
    console.log(npc1.velocityY)

  }


  if(npc2.collide(box1)||
  npc2.collide(box2)||
  npc2.collide(box3)||
  npc2.collide(box4)||
  npc2.collide(box5)||
  npc2.collide(box6)||
  npc2.collide(box7)||
  npc2.collide(box8)||
  npc2.collide(box9)||
  npc2.collide(box10)||
  npc2.collide(box11)||
  npc2.collide(box12)||
  npc2.collide(box13)||
  npc2.collide(box14)||
  npc2.collide(box15)||
  npc2.collide(box16)||
  npc2.collide(box17)||
  npc2.collide(box18)||
  npc2.collide(box19)||
  npc2.collide(box20)||
  npc2.collide(box21)||
  npc2.collide(box22)||
  npc2.collide(box23)||
  npc2.collide(box24)||
  npc2.collide(box25)||
  npc2.collide(box26)||
  npc2.collide(box27)||
  npc2.collide(box28)||
  npc2.collide(box29)||
  npc2.collide(box30)||
  npc2.collide(box31)||
  npc2.collide(box32)||
  npc2.collide(box33)||
  npc2.collide(box34)||
  npc2.collide(box35)||
  npc2.collide(box36)||
  npc2.collide(box37)||
  npc2.collide(box38)||
  npc2.collide(box39)||
  npc2.collide(box40)||
  npc2.collide(box41)||
  npc2.collide(box42)||
  npc2.collide(box43)||
  npc2.collide(box44)||
  npc2.collide(box45)){
    var w=Math.round(random(1,8))
    if(w==1){
        npc2.velocityX=7
    }else if(w==2){
        npc2.velocityX=-7
    }
    else if(w==3){
        npc2.velocityY=7
    }
    else{
        npc2.velocityY=-7
    }
   // console.log(w)
  }
 

  if(npc3.collide(box1)||
  npc3.collide(box2)||
  npc3.collide(box3)||
  npc3.collide(box4)||
  npc3.collide(box5)||
  npc3.collide(box6)||
  npc3.collide(box7)||
  npc3.collide(box8)||
  npc3.collide(box9)||
  npc3.collide(box10)||
  npc3.collide(box11)||
  npc3.collide(box12)||
  npc3.collide(box13)||
  npc3.collide(box14)||
  npc3.collide(box15)||
  npc3.collide(box16)||
  npc3.collide(box17)||
  npc3.collide(box18)||
  npc3.collide(box19)||
  npc3.collide(box20)||
  npc3.collide(box21)||
  npc3.collide(box22)||
  npc3.collide(box23)||
  npc3.collide(box24)||
  npc3.collide(box25)||
  npc3.collide(box26)||
  npc3.collide(box27)||
  npc3.collide(box28)||
  npc3.collide(box29)||
  npc3.collide(box30)||
  npc3.collide(box31)||
  npc3.collide(box32)||
  npc3.collide(box33)||
  npc3.collide(box34)||
  npc3.collide(box35)||
  npc3.collide(box36)||
  npc3.collide(box37)||
  npc3.collide(box38)||
  npc3.collide(box39)||
  npc3.collide(box40)||
  npc3.collide(box41)||
  npc3.collide(box42)||
  npc3.collide(box43)||
  npc3.collide(box44)||
  npc3.collide(box45)){
    var e=Math.round(random(1,8))
    if(e==1){
        npc3.velocityX=7
    }else if(e==2){
        npc3.velocityX=-7
    }
    else if(e==3){
        npc3.velocityY=7
    }
    else{
        npc3.velocityY=-7
    }
   // console.log(e)
  }

  if(npc5.collide(box1)||
  npc5.collide(box2)||
  npc5.collide(box3)||
  npc5.collide(box4)||
  npc5.collide(box5)||
  npc5.collide(box6)||
  npc5.collide(box7)||
  npc5.collide(box8)||
  npc5.collide(box9)||
  npc5.collide(box10)||
  npc5.collide(box11)||
  npc5.collide(box12)||
  npc5.collide(box13)||
  npc5.collide(box14)||
  npc5.collide(box15)||
  npc5.collide(box16)||
  npc5.collide(box17)||
  npc5.collide(box18)||
  npc5.collide(box19)||
  npc5.collide(box20)||
  npc5.collide(box21)||
  npc5.collide(box22)||
  npc5.collide(box23)||
  npc5.collide(box24)||
  npc5.collide(box25)||
  npc5.collide(box26)||
  npc5.collide(box27)||
  npc5.collide(box28)||
  npc5.collide(box29)||
  npc5.collide(box30)||
  npc5.collide(box31)||
  npc5.collide(box32)||
  npc5.collide(box33)||
  npc5.collide(box34)||
  npc5.collide(box35)||
  npc5.collide(box36)||
  npc5.collide(box37)||
  npc5.collide(box38)||
  npc5.collide(box39)||
  npc5.collide(box40)||
  npc5.collide(box41)||
  npc5.collide(box42)||
  npc5.collide(box43)||
  npc5.collide(box44)||
  npc5.collide(box45)){
    var e=Math.round(random(1,4))
    if(e==1){
        npc5.velocityX=7
    }else if(e==2){
        npc5.velocityX=-7
    }
    else if(e==3){
        npc5.velocityY=7
    }
    else{
        npc5.velocityY=-7
    }
  //  console.log(e)
    //console.log(npc5.velovityX)
   // console.log(npc5.velovityY)
  }
 

  if(npc4.collide(box1)||
  npc4.collide(box2)||
  npc4.collide(box3)||
  npc4.collide(box4)||
  npc4.collide(box5)||
  npc4.collide(box6)||
  npc4.collide(box7)||
  npc4.collide(box8)||
  npc4.collide(box9)||
  npc4.collide(box10)||
  npc4.collide(box11)||
  npc4.collide(box12)||
  npc4.collide(box13)||
  npc4.collide(box14)||
  npc4.collide(box15)||
  npc4.collide(box16)||
  npc4.collide(box17)||
  npc4.collide(box18)||

  npc4.collide(box19)||
  npc4.collide(box20)||
  npc4.collide(box21)||
  npc4.collide(box22)||
  npc4.collide(box23)||
  npc4.collide(box24)||
  npc4.collide(box25)||
  npc4.collide(box26)||
  npc4.collide(box27)||
  npc4.collide(box28)||
  npc4.collide(box29)||
  npc4.collide(box30)||
  npc4.collide(box31)||
  npc4.collide(box32)||
  npc4.collide(box33)||
  npc4.collide(box34)||
  npc4.collide(box35)||
  npc4.collide(box36)||
  npc4.collide(box37)||
  npc4.collide(box38)||
  npc4.collide(box39)||
  npc4.collide(box40)||
  npc4.collide(box41)||
  npc4.collide(box42)||
  npc4.collide(box43)||
  npc4.collide(box44)||
  npc4.collide(box45)){
    var e=Math.round(random(1,4))
    if(e==1||e==5){
        npc4.velocityX=7
    }else if(e==2||e==6){
        npc4.velocityX=-7
    }
    else if(e==3||e==7){
        npc4.velocityY=7
    }
    else{
        npc4.velocityY=-7
    }
  //  console.log(e)
  }

  if(npc6.collide(box1)||
  npc6.collide(box2)||
  npc6.collide(box3)||
  npc6.collide(box4)||
  npc6.collide(box5)||
  npc6.collide(box6)||
  npc6.collide(box7)||
  npc6.collide(box8)||
  npc6.collide(box9)||
  npc6.collide(box10)||
  npc6.collide(box11)||
  npc6.collide(box12)||
  npc6.collide(box13)||
  npc6.collide(box14)||
  npc6.collide(box15)||
  npc6.collide(box16)||
  npc6.collide(box17)||
  npc6.collide(box18)||
  npc6.collide(box19)||
  npc6.collide(box20)||
  npc6.collide(box21)||
  npc6.collide(box22)||
  npc6.collide(box23)||
  npc6.collide(box24)||
  npc6.collide(box25)||
  npc6.collide(box26)||
  npc6.collide(box27)||
  npc6.collide(box28)||
  npc6.collide(box29)||
  npc6.collide(box30)||
  npc6.collide(box31)||
  npc6.collide(box32)||
  npc6.collide(box33)||
  npc6.collide(box34)||
  npc6.collide(box35)||
  npc6.collide(box36)||
  npc6.collide(box37)||
  npc6.collide(box38)||
  npc6.collide(box39)||
  npc6.collide(box40)||
  npc6.collide(box41)||
  npc6.collide(box42)||
  npc6.collide(box43)||
  npc6.collide(box44)||
  npc6.collide(box45)){
    var e=Math.round(random(1,4))
    if(e==1||e==5){
        npc6.velocityX=7
    }else if(e==2||e==6){
        npc6.velocityX=-7
    }
    else if(e==3||e==7){
        npc6.velocityY=7
    }
    else{
        npc6.velocityY=-7
    }
   // console.log(e)
   
  }


 drawSprites()
 
}


