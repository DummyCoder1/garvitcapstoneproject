var turn=0
function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("red");
    fill("#404040");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("blue");
    textSize(18);
    text("TIC TAC TOE", width / 2, 33);
    fill("orange");
}


function draw()
{

 createRow(200)
 createRow(300)
 createRow(400)  
}

function createRow(y)
{
  for (x = 450; x < 750; x=x+100)
   {
       var b1= new Box(x,y,100,100); 
       b1.appear();   
   }  
}