const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);}


    Engine.update(engine);
}

  async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
    var json=await response.json()
    var datetime=json.datetime
    var hour=datetime.slice(11,13)
    console.log(hour)
    if(hour>=05 && hour<=07){
        bg="sunrise1.png"
    }
    else if(hour>07 && hour<=09){
        bg="sunrise2.png"
    }
    else if(hour>09 && hour<=10){
        bg="sunrise3.png"
    }
    else if(hour>10 && hour<=12){
        bg="sunrise4.png"
    }
     
    else if(hour>12 && hour<=14){
        bg="sunrise5.png"
    }
    else if(hour>14 && hour<=16){
        bg="sunrise6.png"
    }
    else if(hour>16 && hour<=17){
        bg="sunrise7.png"
    }
    else if(hour>17 && hour<=18){
        bg="sunrise8.png"
    }
    else if(hour>18 && hour<=19){
        bg="sunrise9.png"
    }
    else if(hour>19 && hour<=20){
        bg="sunrise10.png"
    }
    else if(hour>20 && hour<=05){
        bg="sunrise11.png"
    }
      backgroundImg=loadImage(bg) 
}
