
let beez = [];
let flowerz = [];

function setup() {
  createCanvas(650, 450);

  for (let f = 0;  f <20;  f++){
    flowerz[f] = new FLOWER();
  }
  for (let b = 0; b < 7; b++){
    beez[b] = new BEE();
    }
}

function draw() {
  stroke(0);
  background(150,235,255);

  for (let f = 0; f < flowerz.length; f++){
  flowerz[f].drawFLOWER();
  }

  for (let b = 0; b < beez.length; b++){
  beez[b].displayBEE();
  beez[b].moveBEE();
  }


}

class FLOWER {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.grean = random(150,255);
    this.blu = random(180,255);

    }

  drawFLOWER() {  
    fill(255,this.grean,this.blu);
    push();
      translate(this.x, this.y);
      noStroke();
      for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 20, 55);
        rotate(PI/5);
      }
      fill(255,220,0);
      ellipse(0,0,40,40);
    pop();
    }

}
  
class BEE {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    console.log("initial x pos =", this.x);
    this.xspeed = random(-2,2);
    this.yspeed = random(-1,1);
  }

  displayBEE() {
    this.w = random(8,20); // makes wings flap
   
    strokeWeight(1);
  
    //wing
    fill(230);
    ellipse(this.x +3,this.y -10,this.w-5,this.w+3);
    //body
    fill(255,235,100);
    ellipse(this.x,this.y,30,20);
    //stripes
    line(this.x, this.y-13,this.x,this.y+8);
    line(this.x-5,this.y-11,this.x-5,this.y+8);
    line(this.x-10,this.y-6,this.x-10,this.y+8);
    //wing
    fill(230);
    ellipse(this.x-3,this.y-10,this.w-5,this.w+3);
    //eyes
    strokeWeight(2)
    point(this.x+9,this.y);
    point(this.x+17,this.y);
    //stinger
    line(this.x-15,this.y,this.x-20,this.y);
    //mouth
    strokeWeight(1)
    line(this.x+7,this.y+5,this.x+12,this.y+5); 
    }
  
  moveBEE() {


    this.y = this.y + this.yspeed + random(-2, 2);
    this.x = this.x + this.xspeed + random(-.5,.5);
  // if (this.x > 0 && this.x < width){
  //   this.xspeed = this.x + random(0,2);
  //   }
  if (this.x > width -  20 || this.x < 20){
   this.xspeed = this.xspeed*-1;
   console.log("switching" );
    }

  if (this.y > height - 20 || this.y < 20){
    this.yspeed = this.yspeed*-1;
     console.log("switching" );
       }
   


  // if (bee.y < 0 ) {
  //   bee.yspeed = 1; 
  //   }
  // if (bee.y > height) {
  //   bee.yspeed = -1;
  //   }
  
    // console.log(this.xspeed);
    // console.log(this.x);
    // console.log(width);
    // console.log(width);
    } 

}



// drunk walk example-- https://editor.p5js.org/hellomrdesigner/sketches/TX6Lu-VW
// add a mouse click function to add more bees?

// //     this.position =  createVector(random(width),random(height));